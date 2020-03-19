import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import "./reset.css";
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import SocialLinks from './footer/social_links';
import ProductShowContainer from "./products/product_show_container";
import ProductIndexContainer from './products_index/products_index_container';

const App = () => (
    <div>
        <NavBarContainer />
        
        <Switch>
            <Route exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/Socials" component={SocialLinks} />
            <Route exact path="/product/:id" component={ProductShowContainer} />
            <Route exact path="/:category" component={ProductIndexContainer} />
            <Route exact path="/:category/:product_type" component={ProductIndexContainer} />
            <Route exact path="/product/:id" component={ProductShowContainer} />
            <Route exact path="/:category" component={ProductIndexContainer} />
            <Route exact path="/:category/:product_type" component={ProductIndexContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;