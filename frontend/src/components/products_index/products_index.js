import React from 'react';
import { withRouter } from 'react-router-dom';
import './product_index.css';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    debugger;
    this.props.fetchProducts("kids");
  }

  render() {
    debugger;
    if (this.props.products.length === 0) return null;

    const productsLists = this.props.products.map(product => {
      return ( <li key={product.id}><img src={product.images[0]}/></li>);
    });

    return (
      <><div className="index-page-main-div">{productsLists}</div></>
    )
  }
}

export default withRouter(ProductIndex);