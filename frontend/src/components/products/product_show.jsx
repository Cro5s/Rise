import React from "react";
import { withRouter } from "react-router-dom";
import "./product_show.css";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: this.props.product, 
      isLoaded: false
    };
  }

  componentDidMount() {
    // debugger;
    this.props.fetchProduct(this.props.id)
      // .then(res => {this.setState({product: res})});
    if (this.state.product) {
      this.setState({ isLoaded: true })
    };
    
    // this.props.fetchProduct("5e73039a1c9d440000ade78e");
    // .then(res => {this.setState(
      //   {isLoaded: true }
      // )});
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
      console.log(this.state.isLoaded);
      return (
        <div className="main-container">
          <div className="left-container">
            <ul className="product-images">
              {
                images.map((image, idx) => {
                  return (
                    <li className="image" key={idx}>
                      <img src={image}/>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="right-container">
            <div className="product-name">{product_name}</div>
            <div className="price-container">
              <div className="price">{price}</div>
              <div className="currency-type">USD</div>
            </div>
            <div className="description">{description}</div>
            <div className="quantity">
              {
                quantity > 0 ? <ul className="sizes">
                  {
                    size.map((s, idx) => {
                      return (
                        <li className="size" key={idx}>{s}</li>
                      );
                    })
                  }
                </ul> : <h3 className="sold-out">SOLD OUT</h3>
              }
            </div>
            <button className="add-button">ADD</button>
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