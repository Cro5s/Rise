import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
  }

  componentDidMount() {
    // debugger;
    this.props.fetchProduct(this.state.id);
  }

  render() {
    const { 
      product_name, 
      quantity, 
      size, 
      price, 
      description, 
      images 
    } = this.state;

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