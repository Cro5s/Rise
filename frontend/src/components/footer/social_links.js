import React from 'react';
import { connect } from 'react-redux';
import './footer.css';

const SocialLinks = () => {
    return (
        <div className="socials-page">
            <div className="social-page-items">
                <h1> Created By </h1>
                <p> Jayasree Suryadevara </p>
                <div>
                    <a href="https://www.linkedin.com/in/jayasree-suryadevara-98066415/" target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
                    <a href="https://github.com/JayasreeSuryadevara" target="_blank"><i class="fab fa-github fa-4x"></i></a>
                </div>
                <br />
                <p> Kadeem Jackson </p>
                <div>
                    <a href="https://www.linkedin.com/in/kadeem-jackson-4349348a/" target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
                    <a href="https://github.com/Cro5s" target="_blank"><i class="fab fa-github fa-4x"></i></a>
                </div>
                <br />
                <p> Rapkat Amin </p>
                <div>
                    <a href="" target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
                    <a href="https://github.com/rapkat10" target="_blank"><i class="fab fa-github fa-4x"></i></a>
                </div>
            </div>
        </div>
    );
}

export default connect(null, null)(SocialLinks);