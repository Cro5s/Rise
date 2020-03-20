<div className="main-container">
  <div className="left-container">
    <ul className="product-images">
      {
        images.map((image, idx) => {
          return (
            <li className="image" key={idx}>{image}</li>
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



if (this.state.isLoaded) {
  return (
    <div className="main-container">
      <div className="left-container">
        <ul className="product-images">
          {
            images.map((image, idx) => {
              return (
                <li className="image" key={idx}>{image}</li>
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
};