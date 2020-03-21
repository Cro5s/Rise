import React from "react";
import { withRouter } from "react-router-dom";
import "./product_show.css";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: this.props.product, 
      isLoaded: false,
      quantity: 0,
      size: "",
      cartItem: this.props.cartItem,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.id)
  
    if (this.state.product) {
      this.setState({ isLoaded: true })
    };
    
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value }); 
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();

  // }

  handleAddCartItem() {
    this.setState({ quantity: + 1 });
    let cartItem;

    if (this.state.quantity > 0) {
      cartItem = {
        product_id: this.props.product.id,
        product_name: this.props.product.product_name,
        user_id: this.props.currentUser,
        quantity: this.state.quantity,
        size: this.state.size,
        price: this.props.product.price
      };

      this.props.createCartItem(cartItem.user_id, cartItem);
    } else {
      cartItem = this.state.cartItem;
      cartItem.quantity = this.state.quantity;
      cartItem.size = this.state.size;
      this.props.updateCartItem(cartItem.user_id, cartItem);
    };

  }

  render() {
    if (this.state.product === {}) return null;

    let { 
      product_name, 
      quantity, 
      size, 
      price, 
      description, 
      images
    } = this.props.product;
    
    if (images === undefined) images = [];
    if (price) price = price.toFixed(2);

    if (this.state.isLoaded) {
      return (
        <div className="main-container">
          <div className="left-container">
            <ul className="product-images">
              {
                images.map((image, idx) => {
                  return (
                    <li className="image" key={idx}>
                      <img alt={product_name} src={image}/>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="right-container">
            <h3 className="product-name">{product_name}</h3>
            <div className="price-container">
              <div className="price">{price}</div>
              <div className="currency-type">USD</div>
            </div>
            <div className="description">{description}</div>
            <form className="cart-form" onSubmit={this.handleSubmit}>
              <div className="quantity">
                {
                  quantity > 0 ? <ul className="sizes">
                    {
                      size.map((s, idx) => {
                        return (
                          <li 
                            className="size" 
                            key={idx} 
                            value={s}
                            onClick={this.update("size")}
                          >
                            {s}
                          </li>
                        );
                      })
                    }
                  </ul> : <h3 className="sold-out">SOLD OUT</h3>
                }
              </div>
              <p className="selected-size">My size is {this.state.size}</p>
              <button 
                className="add-button" 
                onClick={this.handleAddCartItem}
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <h4 className="loading">Loading...</h4>
      )
    }
  }
}

export default withRouter(ProductShow);