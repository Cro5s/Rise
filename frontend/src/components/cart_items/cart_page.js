import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.backToHome = this.backToHome.bind(this);
    }

    componentDidMount(){
        if (!this.props.cartItems){
            this.props.fetchCartItems(this.props.userId)
        }
    }

    backToHome(e) {
        e.preventDefault();
        this.props.history.push("/")
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
                    <ul>
                        {cartItems.map(cartItem => {
                            return (
                                <li key="cartItem._id">
                                    <span>
                                        <img className="cart-item-img" src={image}  />
                                    </span>
                                    <br />
                                    <span>
                                        <label>Name</label>
                                        {cartItem.product_name}
                                    </span>
                                    <span>
                                        <label>Quantity</label>
                                        {cartItem.quantity}
                                    </span>
                                    <button>
                                        Remove Item
                                    </button>
                                    <button>
                                        Pay with Paypal
                                    </button>
                                </li>
                            )
                        })}
                    </ul>

                    {/* </form> */}

                </div>
            );
        }
    
    }
}

export default withRouter(CartPage);