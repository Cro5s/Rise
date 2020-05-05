import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.openCartPage = this.openCartPage.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleSearch(e) {
    e.preventDefault();
    document.getElementById("search-bar").style.display = "none";
    this.props.history.push('/search')
  }

  openCartPage(e) {
    e.preventDefault();
    document.getElementById("search-bar").style.display = "block";
    this.props.history.push('/cart_page');
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartItemsLength !== this.props.cartItemsLength) {
      this.props.fetchCartItems(this.props.userId);
    } else if (prevProps.userId !== this.props.userId) {
        this.props.fetchCartItems(this.props.userId);
    }
  }

  render() {
    const { currentUserName, cartItemsLength } = this.props;

    let selected;
    cartItemsLength >= 10 ? (selected = "cart-count cart-count-10")
    : (selected = "cart-count");

    return (
      <div className="nav-bar-container">
        <div className="navbar-icon-container">
          <div className="navbar-icon">
            <i className="fas fa-bars"></i>
          </div>
          <div className="category-menu-navbar">
            <nav className="navbar" role="navigation">
              <ul className="category-menu">
                <li className="category-menu-item-1" >
                  <Link to="/woman" className="category-link-1">WOMAN</Link>
                  <ul className="menu-item-1-subitems">
                    <li className="menu-item--is-divider" role="separator"/>
                    <li className="menu-item--is-divider" role="separator" />
                    <li className="category-menu-item-1-1">
                      <Link to="/woman/jackets" className="category-link-1-1">JACKETS</Link>
                    </li>
                    <li className="category-menu-item-1-2">
                      <Link to="/woman/shirts" className="category-link-1-2">TOPS</Link>
                    </li>
                    <li className="category-menu-item-1-3">
                      <Link to="/woman/pants" className="category-link-1-3">PANTS</Link>
                    </li>
                    <li className="category-menu-item-1-4">
                      <Link to="/woman/shoes" className="category-link-1-4">SHOES</Link>
                    </li>
                  </ul>
                </li>
                <li className="category-menu-item-2" >
                  <Link to="/men" className="category-link-2">MEN</Link>
                  <ul className="menu-item-2-subitems">
                    <li className="menu-item--is-divider" role="separator" />
                    <li className="menu-item--is-divider" role="separator" />
                    <li className="category-menu-item-2-1">
                      <Link to="/men/jackets" className="category-link-2-1">JACKETS</Link>
                    </li>
                    <li className="category-menu-item-2-2">
                      <Link to="/men/shirts" className="category-link-2-2">SHIRTS</Link>
                    </li>
                    <li className="category-menu-item-2-3">
                      <Link to="/men/pants" className="category-link-2-3">PANTS</Link>
                    </li>
                    <li className="category-menu-item-2-4">
                      <Link to="/men/shoes" className="category-link-2-4">SHOES</Link>
                    </li>
                  </ul>
                </li>
                <li className="category-menu-item-3" >
                  <Link to="/kids" className="category-link-3">KIDS</Link>
                  <ul className="menu-item-3-subitems">
                    <li className="menu-item--is-divider" role="separator" />
                    <li className="menu-item--is-divider" role="separator" />
                    <li className="category-menu-item-3-1">
                      <Link to="/kids/jackets" className="category-link-3-1">JACKETS</Link>
                    </li>
                    <li className="category-menu-item-3-2">
                      <Link to="/kids/shirts" className="category-link-3-2">SHIRTS</Link>
                    </li>
                    <li className="category-menu-item-3-3">
                      <Link to="/kids/pants" className="category-link-3-3">PANTS</Link>
                    </li>
                    <li className="category-menu-item-3-4">
                      <Link to="/kids/shoes" className="category-link-3-4">SHOES</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {
                this.props.loggedIn ? <button className="logout-link" onClick={this.logoutUser}>Logout</button> : null
              }
            </nav>
          </div>
        </div>
        <div className="main-page-nav">
          <div className="logo-container">
            <Link className="logo-link" to="/">
              <h1 className="logo">RISE</h1>
            </Link>
          </div>
          <div id="search-bar">
              <button 
                className="search-button"
                onClick={this.handleSearch}
              >SEARCH  _________________</button>
          </div>
          <div className="social-link">
            <Link to="/Socials">Created By</Link>
          </div>
          <div className="status-container">
            <div className="login-status-container">
            { 
              this.props.loggedIn ? <h3 className="user-name">{currentUserName}</h3> : <Link className="login-link" to="/login">LOG IN</Link>
            }
            </div>
            <div 
              className="shopping-cart-icon"
              onClick={this.openCartPage}>
              <div className={selected}>{this.props.cartItemsLength}</div>
              <i className="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);