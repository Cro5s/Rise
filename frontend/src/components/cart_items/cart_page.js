import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: this.props.cartItems
        }
        this.backToHome = this.backToHome.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }

    componentDidMount(){
        if (this.props.cartItems.length === 0){
            this.props.fetchCartItems(this.props.userId)
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
                return true;
            }
        });
        this.props.deleteCartItem(cartItem._id)
        this.setState({
            cartItems: cartItems
        });
    }

    render() {
        const cartItems = this.props.cartItems;
        console.log("cart-items", cartItems);

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
                    {/* <form onSubmit={this.handleSubmit} > */}
                    <h2> You have {`${cartItemsCount}`} items in your cart!</h2>
                    <ul className="cart-item-list">
                        {cartItems.map(cartItem => {
                            return (
                                <li key="cartItem.product_id" className="cart-list-li">
                                    <span>
                                        <img className="cart-item-img" src={cartItem.image}  />
                                    </span>
                                    <br />
                                    <span className="cart-item-details-1">
                                        <label>Name</label>
                                        {cartItem.product_name}
                                    </span>
                                    <br />
                                    <span className="cart-item-details-2">
                                        <label>Quantity</label>
                                        {cartItem.quantity}
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
                    
                    <button className="cart-item-pay">
                        Pay with Paypal
                    </button>

                    {/* </form> */}

                </div>
            );
        }
    
    }
}

export default withRouter(CartPage);