import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div className="brand">
                <a href="/">amazona
                </a>
            </div>
            <div className="menu-items">
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>

        </header>
        <main>
            <div className="row center">
                {data.products.map((product) =>(
                  <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                      <img className="medium" src={product.image} alt={product.name}/>
                  </a>
                  <div className="card-body">
                      <a href={`/product/${product._id}`}>
                          <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star-o"></i></span>
                          <span><i className="fa fa-star-half-o"></i></span>
                      </div>
                      <div className="price">
                          <h1>GHS{product.price}</h1>
                      </div>
                  </div>
              </div>
                ))}
            </div>
        </main>
        <footer className="row center">All rights reserved &copy 2022</footer>
    </div>
  );
}

export default App;
