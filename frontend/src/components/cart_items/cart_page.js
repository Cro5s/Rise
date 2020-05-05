import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './cart_page.css';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.backToHome = this.backToHome.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }

    deleteAll() {
        const { cartItems } = this.props;
        cartItems.forEach(cartItem => {
            this.props.deleteCartItem(cartItem._id).then(() => {
                document.querySelector(".back-to-home").insertAdjacentHTML(
                    "afterend",
                    `<p id="o-c">Order Complete!</p>`
                );

                // setTimeout(() => {
                //     let element = document.getElementById("o-c");
                //     if (element) {
                //         element.remove();
                //     }
                // }, 3000)
            });
        })
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
        const cartItemsCount = cartItems.length;

        if (cartItemsCount === 0) {
            return (
                <div className="empty-mesg">
                    <h2>Your cart is empty.</h2>
                    <div className="back-to-home">
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
                    <h2 className="shopping-cart">SHOPPING CART</h2>
                    <h2>{cartItemsCount} items</h2>
                    <div className="cart-list-div">
                        <ul className="cart-list-ul">
                            {cartItems.map((cartItem, i) => {
                                let price;
                                if (cartItem.price) {
                                    price = cartItem.price.toFixed(2);
                                }
                                return (
                                    <li className="cart-list-li" key={i}>
                                        <div>
                                            {/* <Link to={`/product/${cartItem._id}`} > */}
                                                <img className="cart-item-img" 
                                                src={cartItem.image}
                                                alt={cartItem.product_name}  />
                                            {/* </Link> */}
                                        </div>
                                        <div className="cart-product-name">
                                            {/* <Link to = {`/product/${cartItem._id}`} > */}
                                                {cartItem.product_name}
                                            {/* </Link> */}
                                        </div>
                                        <div className="cart-item-price">
                                            {`${price} USD`}
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
                        <div className="total-price">
                            {`TOTAL ${total} USD`}
                        </div>
                        <div>
                            <button className="checkout" onClick={() => this.deleteAll()}>
                                Checkout 
                            </button>
                        </div>
                    </div>

                </div>
            );
        }
    
    }
}

export default withRouter(CartPage);