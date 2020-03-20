import React from 'react';
import { Link } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if ( !this.props.cart_items ) return null;

        return <div></div>
    }
}