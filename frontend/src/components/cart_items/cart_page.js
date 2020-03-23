import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.backToHome = this.backToHome.bind(this);
    }

    componentDidMount(){
        this.props.fetchCartItems(this.props.userId);
    }

    backToHome(e) {
        e.preventDefault();
        this.props.history.push("/")
    }

    render() {
        const { cartItems } = this.props;
        if (cartItems.length === 0) return null;

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
            let total = 0;
            cartItems.forEach(item => {
                total += item.price;
            });
            total = total.toFixed(2);

            return (
                <div className="cart-page-container ">
                    {/* <form onSubmit={this.handleSubmit} > */}
                    <h2 className="shopping-cart">SHOPPING CART</h2>
                    <h2>{cartItemsCount} items</h2>
                    <div className="cart-list-div">
                        <ul className="cart-list-ul">
                            {cartItems.map((cartItem, i) => {
                                return (
                                    <li className="cart-list-li" key={i}>
                                        <div>
                                            <img className="cart-item-img" 
                                            src={cartItem.image}
                                            alt={cartItem.product_name}  />
                                        </div>
                                        <div className="cart-product-name">
                                            {cartItem.product_name}
                                        </div>
                                        <div className="cart-item-price">
                                            {`${cartItem.price} USD`}
                                        </div>
                                        < div className = "cart-product-size" >
                                            {cartItem.size}
                                        </div>
                                        <div>
                                            {`Quantity: ${cartItem.quantity}`}
                                        </div>
                                        <div className="cart-item-delete-div">
                                            <button
                                                onClick={() => 
                                                    this.props.deleteCartItem(cartItem._id)
                                                    }>
                                                DELETE
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="cart-footer">
                        <div>
                            {`TOTAL ${total} USD`}
                        </div>
                        <div>
                            <button>
                                Pay with Paypal 
                            </button>
                        </div>
                    </div>
                    {/* </form> */}

                </div>
            );
        }
    
    }
}

export default withRouter(CartPage);