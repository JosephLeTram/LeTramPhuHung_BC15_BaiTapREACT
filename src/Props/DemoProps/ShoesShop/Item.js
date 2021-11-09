import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { productInfo } = this.props;
    return (
      <div className="card">
        <img src={productInfo.image} alt="..." />
        <div className="card-body bg-dark text-white">
          <h5 style={{ height: 100 }}>{productInfo.name}</h5>
          <p>{productInfo.price}</p>
          <button className="btn btn-warning font-weight-bold">
            Add to cart <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}
