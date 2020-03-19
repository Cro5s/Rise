import React from 'react';
import { withRouter } from 'react-router-dom';
import './product_index.css';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProducts("kids");
  }

  render() {
    if (this.props.products.length === 0) return null;

    const productsLists = this.props.products.map((product, i) => {
      return ( <li key={i}><img src={product.images[0]}/></li>);
    });

    return (
      <>
        <div className="index-page-main-div">
          <ul>
            {productsLists}
          </ul>
        </div>
      </>
    )
  }
}

export default withRouter(ProductIndex);