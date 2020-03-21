import React from 'react';
import { Link } from 'react-router-dom';
import "./main_page.css";
import men from "./assets/images/landscape_0.jpg";
import women from "./assets/images/landscape_0(3).jpg";
import kids from "./assets/images/landscape_0(10).jpg";

class MainPage extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="men--main">
          <Link to="/men">
            <img src={men} alt="men-main"/>
          </Link>
        </div>
        <div className="women--main">
          <Link to="/woman">
            <img src={women} alt="women-main" />
          </Link>
        </div>
        <div className="kids--main">
          <Link to="/kids">
            <img src={kids} alt="kids-main" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;