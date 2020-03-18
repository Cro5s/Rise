import React from 'react';
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="main-page-container">
        <div className="logo-container">
          <Link className="logo" to="/">RISE</Link>
        </div>

        <footer>
          Copyright &copy; 2020 Rise
        </footer>
      </div>
    );
  }
}

export default MainPage;