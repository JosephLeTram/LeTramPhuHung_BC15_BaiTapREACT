import React, { Component } from "react";
import axios from "axios";
export default class ClassApi extends Component {
  state = {
    arrNguoiDung: [],
  };
  getAPIDanhSachNguoiDung = async () => {
    try {
      let result = await axios({
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
        method: "GET",
      });

      await this.setState({
        arrNguoiDung: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }

    console.log("After sync");

    // let promise = axios({
    //   url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    //   method: "GET",
    // });

    // // Xử lý thành công
    // promise.then((result) => {
    //   console.log("Result", result);

    //   //Lấy dữ liệu từ backend về đưa vào state
    //   this.setState({
    //     arrNguoiDung: result.data.content,
    //   });
    //   console.log(this.state);
    // });

    // // Xử lý thất bại
    // promise.catch((error) => {
    //   console.log({ error });
    // });
  };

  renderNguoiDung = () => {
    return this.state.arrNguoiDung.map((nguoiDung, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img
              src={`http://i.pravatar.cc/150?u=${nguoiDung.email}`}
              height={100}
              width={100}
              alt="..."
            />
          </div>
          <div className="card-body">
            <p>Họ Tên: {nguoiDung.hoTen}</p>
            <p>SDT: {nguoiDung.soDt}</p>
          </div>
        </div>
      );
    });
  };

  // Hàm chạy sau khi giao diện html render (thường gọi api)
  //   componentDidMount() {
  //     this.getAPIDanhSachNguoiDung();
  //   }

  render() {
    return (
      <div className="container">
        <h3>Demo Class Component API</h3>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            this.getAPIDanhSachNguoiDung();
          }}
        >
          Get API
        </button>

        {/* <table>
          <thead>
            <tr>
              <th>Tài Khoản</th>
              <th>Hình Ảnh</th>
              <th>Họ Tên</th>
              <th>Sô Điện Thoại</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>
                    <img
                      src={`https://i.pravatar.cc/100?u=${nguoiDung.email}`}
                      alt="..."
                    />
                  </td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.soDt}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}

        <div className="row">{this.renderNguoiDung()}</div>
      </div>
    );
  }
}
