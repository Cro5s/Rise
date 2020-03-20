import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './product_index.css';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.product_type) {
      this.props.fetchProductTypes(this.props.category,
        this.props.product_type);
    } else {
      this.props.fetchProducts(this.props.category);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      if (this.props.product_type) {
        this.props.fetchProductTypes(this.props.category,
          this.props.product_type);
      } else {
        this.props.fetchProducts(this.props.category);
      }
    } else if (this.props.product_type !== prevProps.product_type) {
      if (this.props.product_type) {
        this.props.fetchProductTypes(this.props.category,
          this.props.product_type);
      } else {
        this.props.fetchProducts(this.props.category);
      }
    }
  }

  render() {
    if (this.props.products.length === 0) return null;
    if (this.props.backFromShowPage) return null;
    const { category, product_type, products } = this.props;

    let leftProducts = [];
    let rightProducts = [];
    
    products.forEach((product, i) => {
      if (i % 2 === 0) {
        leftProducts.push(product);
      } else {
        rightProducts.push(product);
      }
    })
    

    const productsListsLeft = leftProducts.map((product, i) => {
      const image = product.images[Math.floor(Math.random() * product.images.length)];
      return ( 
        <li key={i}>
          <div className="products-index-product-div">

            <div className="products--index--img-div">
              <Link to={`/product/${product._id}`} >
                <img className="products-index-img" src={image} alt={product.product_name}/> 
              </Link> 
            </div>
            <Link to={`/product/${product._id}`} >
              <strong className="product--name">{product.product_name}</strong>
            </Link>
            <strong> {`${product.price}0 USD`} </strong>
          </div>
        </li>
      );
    });

    const productsListsRight = rightProducts.map((product, i) => {
      const image = product.images[Math.floor(Math.random() * product.images.length)];
      return ( 
        <li key={i}>
          <div className="products-index-product-div">

            <div className="products--index--img-div">
              <Link to={`/product/${product._id}`} >
                <img className="products-index-img" src={image} alt={product.product_name}/> 
              </Link> 
            </div>
            <Link to={`/product/${product._id}`} >
              <strong className="product--name">{product.product_name}</strong>
            </Link> 
            <strong>{`${product.price}0 USD`}</strong>
          </div>
        </li>
      );
    });

    let selectedTitle;
    if (product_type) {
      selectedTitle = <>
        <div className="category-name-div">
          <strong className="category--name">
            {`shop all ${product_type} in ${category}`}
          </strong> 
        </div>
      </>;
    } else {
      selectedTitle = <>
        <div className="category-name-div">
          <strong className="category--name">
            {`shop all ${category}`}
          </strong> 
        </div>
      </>;
    }

    return (
      <>
        {selectedTitle}
        <div className="products-index-div">

          <ul className="products-index-ul">
            {productsListsLeft}
          </ul>
          <ul className="products-index-ul--right">
            {productsListsRight}
          </ul>

        </div>
      </>
    )
  }
}

export default withRouter(ProductIndex);