import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="main-page-footer">
                {/* Copyright &copy; 2020 Rise */}
                <div className="footer-link-1">
                    <Link className="linkedin" to="/Socials"><i class="fab fa-linkedin fa-3x"></i></Link>
                </div>
                <div className="footer-link-2">
                    <Link className="github" to="/Socials"><i class="fab fa-github fa-3x"></i></Link>
                </div>
            </footer>
        </div>
    );
}

export default connect(null, null)(Footer);