import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  // getLinks() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div>
  //         <button onClick={this.logoutUser}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to={'/login'}>LOG IN</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    const { currentUser, currentUserName } = this.props;

    return (
      <div className="nav-bar-container">
        <div>
          <div className="navbar-icon">
            <i className="fas fa-bars"></i>
          </div>
          {/* { this.getLinks() } */}
        </div>
        <div className="main-page-nav">
          <div className="logo-container">
            <Link className="logo-link" to="/">
              <h1 className="logo">RISE</h1>
            </Link>
          </div>
          <div className="status-container">
            { 
              currentUser ? <h3 className="user-name">{currentUserName}</h3> : <Link className="login-link" to="/login">LOG IN</Link>
            }
            <div 
              className="shopping-cart-icon"
            >
              <i className="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;