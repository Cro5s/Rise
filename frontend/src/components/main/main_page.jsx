import React from 'react';
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="main-page-container">
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
        </div>
      </div>
    );
  }
}

export default MainPage;