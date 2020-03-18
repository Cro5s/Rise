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
      <div className="signup-page">
        <div className="signup-form-container">
          <header>
            <h1 class="head">Write your personal details</h1>
          </header>
          <div>
            <form className="form--field" onSubmit={this.handleSubmit}>
              
              <div className="email-input-div">
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                    required="true"
                  />
              </div>
              
              <div>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                    required = "true"
                  />
                  <input type="password"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    placeholder="Confirm Password"
                    required = "true"
                  />
              </div>

              <div>
                <input type="text"
                  value={this.state.fName}
                  onChange={this.update('fName')}
                  placeholder="Name"
                  required = "true"
                />
                <input type="text"
                  value={this.state.lName}
                  onChange={this.update('lName')}
                  placeholder="Last Name"
                  required = "true"
                />
              </div>

              <div>
                <input type="text"
                  value={this.state.address}
                  onChange={this.update('address')}
                  placeholder="Address"
                />
                <input type="text"
                  // value={this.state.address}
                  // onChange={this.update('address')}
                  placeholder="Optional"
                />
              </div>

              <div>
                <input type="text"
                  value={this.state.zipCode}
                  onChange={this.update('zipCode')}
                  placeholder="Zip Code"
                />
                <input type="text"
                  value={this.state.city}
                  onChange={this.update('city')}
                  placeholder="City/Town"
                />
              </div>

              <div>
                {/* < input
                  type = "text"
                  value={this.state.state}
                  onChange={this.update('state')}
                  placeholder="State"
                /> */}
                <select className="stateCode">
                  <option selected="selected" disabled="disabled" value="">
                    Select State
                  </option>
                  <option value="USAK">AK</option><option value="USAL">AL</option><option value="USAR">AR</option><option value="USAZ">AZ</option><option value="USCA">CA</option><option value="USCO">CO</option><option value="USCT">CT</option><option value="USDC">DC</option><option value="USDE">DE</option><option value="USFL">FL</option><option value="USGA">GA</option><option value="USHI">HI</option><option value="USIA">IA</option><option value="USID">ID</option><option value="USIL">IL</option><option value="USIN">IN</option><option value="USKS">KS</option><option value="USKY">KY</option><option value="USLA">LA</option><option value="USMA">MA</option><option value="USMD">MD</option><option value="USME">ME</option><option value="USMI">MI</option><option value="USMN">MN</option><option value="USMO">MO</option><option value="USMS">MS</option><option value="USMT">MT</option><option value="USNC">NC</option><option value="USND">ND</option><option value="USNE">NE</option><option value="USNH">NH</option><option value="USNJ">NJ</option><option value="USNM">NM</option><option value="USNV">NV</option><option value="USNY">NY</option><option value="USOH">OH</option><option value="USOK">OK</option><option value="USOR">OR</option><option value="USPA">PA</option><option value="USRI">RI</option><option value="USSC">SC</option><option value="USSD">SD</option><option value="USTN">TN</option><option value="USTX">TX</option><option value="USUT">UT</option><option value="USVA">VA</option><option value="USVT">VT</option><option value="USWA">WA</option><option value="USWI">WI</option><option value="USWV">WV</option><option value="USWY">WY</option>
                </select>
              </div>

              <div>
                <input type="tel"
                  value={this.state.phone}
                  onChange={this.update('phone')}
                  placeholder="Phone"
                />
              </div>

              <div className="create-account-button-div">
                <input className="create-account-button" type="submit" value="Create Account" />
              </div>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);