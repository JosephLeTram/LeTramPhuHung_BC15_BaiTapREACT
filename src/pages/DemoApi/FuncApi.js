import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function FuncApi() {
  const [arrNguoiDung, setArrNguoiDung] = useState([]); //arrNguoiDung ban đầu là rỗng
  useEffect(() => {
    let promise = axios({
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",
    });

    // Xử lý thành công
    promise.then((result) => {
      //setState sau khi lấy dữ  liệu từ API về
      setArrNguoiDung(result.data.content);
    });

    // Xử lý thất bại
    promise.catch((error) => {
      console.log({ error });
    });
  }, []);

  return (
    <div className="container">
      <h2 className="text-danger">Demo Function Component API</h2>
      <h4 className="text-primary">Danh sách người dùng</h4>
      <table>
        <thead>
          <tr>
            <th>Tài Khoản</th>
            <th>Hình Ảnh</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrNguoiDung.map((nguoiDung, index) => {
            return (
              <tr key={index}>
                <td>{nguoiDung.taiKhoan}</td>
                <td>
                  <img
                    src={`https://i.pravatar.cc/50?u=${nguoiDung.email}`}
                    alt=""
                  />
                </td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.soDt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
