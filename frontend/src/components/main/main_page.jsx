import React from 'react';
import { Link } from 'react-router-dom';
import "./main_page.css";
import men1 from "./assets/images/landscape_0.jpg";
import men2 from "./assets/images/landscape_0(1).jpg";
// import men3 from "./assets/images/landscape_0(2).jpg";
import women1 from "./assets/images/landscape_0(3).jpg";
import women2 from "./assets/images/landscape_0(4).jpg";
import women3 from "./assets/images/landscape_0(6).jpg";
import kids1 from "./assets/images/landscape_0(10).jpg";
import kids2 from "./assets/images/landscape_0(11).jpg";
import kids3 from "./assets/images/landscape_0(9).jpg";

class MainPage extends React.Component {
  render() {
    const menPictures = [men1, men2];
    const selectedMen = menPictures[Math.floor(Math.random() * 2)];
    const womenPictures = [women1, women2, women3];
    const selectedWomen = womenPictures[Math.floor(Math.random() * 3)];
    const kidsPictures = [kids1, kids2, kids3];
    const selectedKids = kidsPictures[Math.floor(Math.random() * 3)];

    return (
      <div className="background">
        <div className="men--main">
          <Link to="/men">
            <img src={selectedMen} alt="men-main"/>
          </Link>
        </div>
        <div className="women--main">
          <Link to="/woman">
            <img src={selectedWomen} alt="women-main" />
          </Link>
        </div>
        <div className="kids--main">
          <Link to="/kids">
            <img src={selectedKids} alt="kids-main" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;