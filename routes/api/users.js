const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
              // Use the validations to send the error
              errors.email = 'User not found';
              return res.status(404).json(errors);
            }
            
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = { id: user.id, email: user.email, fName: user.fName };

                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                } else {
                    errors.password = "Invalid email/password";
                    return res.status(400).json(errors);
                }
            });
        })
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this email" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    fName: req.body.fName,
                    lName: req.body.lName,
                    email: req.body.email,
                    password: req.body.password,
                    address: req.body.address,
                    zipCode: req.body.zipCode,
                    city: req.body.city,
                    state: req.body.state,
                    phone: req.body.phone
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = { id: user.id, email: user.email };

                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        })
})

module.exports = router;