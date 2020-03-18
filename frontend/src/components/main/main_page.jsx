import React from 'react';
import { Link } from "react-router-dom";
import "./main_page.css";
import NavBarContainer from "../nav/navbar_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.receiveCurrentUser(this.props.currentUser)
  // }

  render() {
    const { currentUser, currentUserName } = this.props;

    return (
      <div className="main-page-container">
        <div className="nav-bar-container">
          <NavBarContainer />
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
          
        <div className="main-page">
          <div className="category-page">
            <label className="left-label">MAN</label>
            <div 
              className="left-chevron"
            >
              <i className="fas fa-chevron-left"></i>
            </div>

            <label className="right-label">KIDS</label>
            <div 
              className="right-chevron"
            >
              <i className="fas fa-chevron-right"></i>
            </div>
            
            <div className="category-page-bottom">
              <div 
                className="down-chevron"
                >
                <i className="fas fa-chevron-down"></i>
              </div>

              <div 
                className="page-selection"
                >
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>

          </div>
        </div>

        <footer className="main-page-footer">
          {/* Copyright &copy; 2020 Rise */}
          <div className="footer-link-1">
            <Link className="linkedin" to="/Socials">LinkedIn</Link>
          </div>
          <div className="footer-link-2">
            <Link className="github" to="/Socials">GitHub</Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;