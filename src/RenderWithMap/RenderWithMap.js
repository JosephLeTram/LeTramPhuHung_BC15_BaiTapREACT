import React, { Component } from "react";
import blackCarImage from "../Homework/BaiTapReact_Buoi2/CarBasic/products/black-car.jpg";
import redCarImage from "../Homework/BaiTapReact_Buoi2/CarBasic/products/red-car.jpg";
import silverCarImage from "../Homework/BaiTapReact_Buoi2/CarBasic/products/silver-car.jpg";
import steelCarImage from "../Homework/BaiTapReact_Buoi2/CarBasic/products/steel-car.jpg";

export default class RenderWithMap extends Component {
  productList = [
    { id: 1, name: "black car", img: blackCarImage, price: 1000 },
    { id: 2, name: "red car", img: redCarImage, price: 2000 },
    { id: 3, name: "silver car", img: silverCarImage, price: 3000 },
    { id: 4, name: "steel car", img: steelCarImage, price: 4000 },
  ];

  renderTable = () => {
    //Cách 1: dùng For
    // let arrJXS = [];
    // for (let i = 0; i < this.productList.length; i++) {
    //   // Mỗi lần duyệt lấy ra 1 phần tử
    //   let product = this.productList[i];
    //   // Từ product đó mình sẽ tạo ra 1 tag JXS object tương ứng (không sử dụng string template bởi vì render ra JSX chứ không phải ra chuỗi)
    //   let trHTML = (
    //     <tr>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img src={product.img} alt="..." width="150" height="150" />
    //       </td>
    //     </tr>
    //   );
    //   // Đưa các JXS vào mảng
    //   arrJXS.push(trHTML);
    // }

    // Cách 2: dùng Map
    return this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="..." width="150" height="100" />
          </td>
        </tr>
      );
    });
  };

  RenderWithCard = () => {
    return this.productList.map((product, index) => {
      return (
        <div key={index} className="col-3">
          <div className="card">
            <img src={product.img} alt="..." />
          </div>
          <div className="card-body bg-dark text-white text-center">
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Render with Map to Table</h3>
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          {this.renderTable()}
          {/* <tbody>
            <tr>
              <td>1</td>
              <td>Black Car</td>
              <td>1000</td>
              <td>
                <img src={blackCarImage} alt="..." width="50" height="50" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Red Car</td>
              <td>2000</td>
              <td>
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  width="50"
                  height="50"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Silver Car</td>
              <td>1000</td>
              <td>
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  width="50"
                  height="50"
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Steel Car</td>
              <td>2000</td>
              <td>
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  width="50"
                  height="50"
                />
              </td>
            </tr>
          </tbody> */}
        </table>

        <hr />

        <h3 className="text-center">Render with Map to Card</h3>
        <div className="row">
          {this.RenderWithCard()}
          {/* <div className="col-3">
            <div className="card">
              <img src="https://picsum.photos/200" alt="..." />
            </div>
            <div className="card-body bg-dark text-white">
              <p>Product Name</p>
              <p>Product Picture</p>
            </div>
          </div> */}
        </div>

        <hr />
      </div>
    );
  }
}
