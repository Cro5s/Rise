import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.product;
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

  render() {
    if (this.state === {}) return null;
    console.log("This is the product", this.state);
    // const { 
    //   product_name, 
    //   quantity, 
    //   size, 
    //   price, 
    //   description, 
    //   images 
    // } = this.state;

    return (
      <div className="main-container">
        <div className="left-container">

        </div>
        <div className="right-container">

        </div>
      </div>
    );
  }
}

export default ProductShow;