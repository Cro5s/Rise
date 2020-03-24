import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: Object.values(this.props.cartItems),
            total: this.addTotal()
        }
        this.backToHome = this.backToHome.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.addTotal = this.addTotal.bind(this);
    }

    componentDidMount(){
        if (this.props.cartItems.length === 0){
            this.props.fetchCartItems(this.props.userId);
            this.setState({
                cartItems: Object.values(this.props.cartItems),
                total: this.addTotal()
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cartItems.length !== this.props.cartItems.length) {
            this.setState({
                cartItems: Object.values(this.props.cartItems),
                total: this.addTotal()
            });
        }
    }

    backToHome(e) {
        e.preventDefault();
        this.props.history.push("/")
    }

    deleteCartItem(cartItem) {
        const cartItems = this.props.cartItems.slice();
        cartItems.some((el, i) => {
            if (el === cartItem) {
                cartItems.splice(i, 1);
            }
            return true;
        });
        this.props.deleteCartItem(cartItem._id);
        debugger;
        this.setState({
            cartItems: Object.values(this.props.cartItems),
            total: this.addTotal()
        });
    }

    addTotal() {
        let total = 0;
        this.props.cartItems.forEach(cartItem => {
            total += (cartItem.quantity * cartItem.price);
        });
        return total.toFixed(2);
    }

    render() {
        const cartItems = this.props.cartItems;
        const cartItemsCount = cartItems.length;
        if (cartItemsCount === 0) {
            return (
                <div className="empty-mesg">
                    <h2>Your cart is empty.</h2>
                    <div className="back-to-home ">
                        <Link to="/" className="cart-link" >Discover some items to fill it up</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="cart-page-container ">
                    <h2> You have {`${cartItemsCount}`} items in your cart!</h2>
                    <ul className="cart-item-list">
                        {cartItems.map((cartItem,idx) => {
                            return (
                                <li key={idx} className="cart-list-li">
                                    <span>
                                        <img className="cart-item-img" alt="" src={cartItem.image}  />
                                    </span>
                                    <br />
                                    <span className="cart-item-details-1">
                                        <label>Name </label>
                                        {cartItem.product_name}
                                    </span>
                                    <br />
                                    <span className="cart-item-details-2">
                                        <label>Size </label>
                                        {cartItem.size}
                                    </span>
                                    <br />
                                    <span className="cart-item-details-3">
                                        <label>Quantity </label>
                                        {cartItem.quantity}
                                    </span>
                                    <br />
                                    <span className="cart-item-details-4">
                                        <label>Price </label>
                                        {cartItem.price ? cartItem.price.toFixed(2) : null}
                                    </span>
                                    <br />
                                    <button 
                                        className="cart-item-delete"
                                        onClick={() => this.deleteCartItem(cartItem)}
                                    >
                                        Remove Item
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    <span className="cart-item-total">
                        <label> Total  </label>
                        {this.state.total}
                    </span>
                    <br />
                    <button className="cart-item-pay">
                        Pay with Paypal
                    </button>

                </div>
            );
        }
    
    }
}

export default withRouter(CartPage);