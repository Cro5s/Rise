import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName:'',
      email: '',
      password: '',
      password2: '',
      address: '',
      zipCode: '',
      city: '',
      state: '',
      phone: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      fName: this.state.fName,
      lName:this.state.lName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      address: this.state.address,
      zipCode: this.state.zipCode,
      city: this.state.city,
      state: this.state.state,
      phone: this.state.phone,
    };
    console.log("user in signup", user);
    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signup-form">
          <header>
              <h1 class="head">Write your personal details</h1>
          </header>
          <div>


          </div>
          <form onSubmit={this.handleSubmit}>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
              <input type="text"
                value={this.state.fName}
                onChange={this.update('fName')}
                placeholder="Name"
              />
            <br/>
              <input type="text"
                value={this.state.lName}
                onChange={this.update('lName')}
                placeholder="Last Name"
              />
            <br/>
              <input type="text"
                value={this.state.address}
                onChange={this.update('address')}
                placeholder="Address"
              />
            <br/>
              <input type="text"
                value={this.state.zipCode}
                onChange={this.update('zipCode')}
                placeholder="Zip Code"
              />
            <br/>
              <input type="text"
                value={this.state.city}
                onChange={this.update('city')}
                placeholder="City/Town"
              />
            <br/>
              <input type="text"
                value={this.state.state}
                onChange={this.update('state')}
                placeholder="state"
              />
            <br/>
              <input type="text"
                value={this.state.phone}
                onChange={this.update('phone')}
                placeholder="phone"
              />
            <br/>
            <input type="submit" value="Create Account" />
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);