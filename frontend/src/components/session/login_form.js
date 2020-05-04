import React from 'react';
import { withRouter } from 'react-router-dom';
import './login-form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
     this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  handleDemo(e) {
    e.preventDefault();

    let user = {
      email: "demo@demo.com",
      password: "password"
    };

    this.props.login(user);
  }

  // Handle Register button which routes to Signup form
  handleRegister(e) {
    e.preventDefault();
    this.props.history.push("/signup");
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-flex-container">
          <div className="login-form-page">
            <form onSubmit={this.handleSubmit}>
              <div className="login-form-fields">
                <label className="login-form-title">LOG IN</label>
                  <input required type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                <br/>
                  <input required type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                <br/>
                {this.renderErrors()}
                <input className="login-button" type="submit" value="LOG IN" />
              </div>
            </form>
            <button className="login-button-d" onClick={this.handleDemo}>Demo</button>
          </div>
          <div className="login-form-register-section">
            <label className="login-form-register-label">REGISTER</label>
            <br />
            <p>If you still don't have a Rise.com account, use this option to access the registration form.</p>
            <p>Provide your details to make <b>Rise.com</b> purchases easier.</p>
            <br />
            <button className="risgister-button" onClick={this.handleRegister}>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);