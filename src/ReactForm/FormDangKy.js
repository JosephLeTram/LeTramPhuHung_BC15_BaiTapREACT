import React, { Component } from "react";
import { connect } from "react-redux";
class FormDangKy extends Component {
  state = {
    values: {
      // Chứa những thông tin người dùng nhập
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      // Chứa những thông tin lỗi
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };

  handleEventInput = (event) => {
    // Dựa vào biến event sẽ có thể truy xuất được đến các thông tin của thẻ
    let { id, value, name } = event.target;

    // Mỗi lần nhập liệu sẽ xử lý 2 phần
    // Phần 1 value
    let newValues = { ...this.state.values };
    newValues[name] = value;

    //Phần 2 error
    let newErrors = { ...this.state.errors };
    let messError = "";

    // Khi người dùng nhập bỏ trống
    if (value.trim() === "") {
      messError = name + " không được bỏ trống!";
    }

    if (event.target.type === "email") {
      let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        messError = "Email không đúng định dạng!";
      }
    }

    newErrors[name] = messError;

    this.setState({
      value: newValues,
      errors: newErrors,
    });

    //  this.setState({
    //      [name]: value
    //  },)
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Cản sự kiện reload browser

    // Validation trước khi submit
    let { values, errors } = this.state;

    let valid = true; //valid = true là form hợp lệ
    // Kiểm tra các giá trị (taiKhoan, matKhau...) trong values xem có hợp lệ không
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    // Kiểm tra tất cả giá trị (taiKhoan , matKhau, ...) trong error xem có lỗi không
    for (let key in errors) {
      if (errors[key] === "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      alert("Dữ liệu nhập không hợp lệ!");
      return;
    }

    // Gửi giá trị người dùng nhập vào lên redux
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };

    this.props.dispatch(action);
  };

  //   // Xử lý cách 1: can thiệp vào quá trình render coponent khi thay đổi props
  //   static getDerivedStateFromProps(newProps, currentState) {
  //     // Chọn thời điểm trước khi render props mới từ redux trả về edit vào state và return về state => component render => render state ra

  //     // Cần phân định được người dùng bấm chỉnh sửa hay handleChange
  //     //  + nếu bấm chỉnh sửa thì tài khoản sẽ thay đổi
  //     // + handle change thì tài khoản không thay đổi

  //     if (newProps.nguoiDungChinhSua.taiKhoan !== currentState.values.taiKhoan) {
  //       currentState.values = { ...newProps.nguoiDungChinhSua };
  //     }
  //     return currentState;
  //   }

  // Xử lý cách 2: dùng life cycle cũ khi props thay đổi trước khi render
  componentWillReceiveProps(newProps) {
    // Chỉ chạy khi props thay đổi
    this.setState({
      values: newProps.nguoiDungChinhSua,
    });
  }

  // Xử lý cách 3: không dùng lifecycle, đẩy tất cả lên redux

  render() {
    let { taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung } =
      this.props.nguoiDungChinhSua;
    return (
      <form onSubmit={this.handleSubmit} className="card">
        <div className="card-header bg-dark text-white">
          <h3>Form Đăng Ký</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài Khoản</p>
                <input
                  className="form-control"
                  id="taiKhoan"
                  name="taiKhoan"
                  value={taiKhoan}
                  onChange={this.handleEventInput}
                />
                <p className="text text-danger">{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  className="form-control"
                  id="matKhau"
                  name="matKhau"
                  value={matKhau}
                  onChange={this.handleEventInput}
                />
              </div>
              <p className="text text-danger">{this.state.errors.matKhau}</p>
              <div className="form-group">
                <p>Email</p>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  onChange={this.handleEventInput}
                />
                <p className="text text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ Tên</p>
                <input
                  className="form-control"
                  id="hoTen"
                  name="hoTen"
                  value={hoTen}
                  onChange={this.handleEventInput}
                />
                <p className="text text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số Điện Thoại</p>
                <input
                  className="form-control"
                  id="soDienThoai"
                  name="soDienThoai"
                  value={soDienThoai}
                  onChange={this.handleEventInput}
                />
                <p className="text text-danger">
                  {this.state.errors.soDienThoai}
                </p>
              </div>
              <div className="form-group">
                <p>Mã Loại Người Dùng</p>
                <select
                  className="form-control"
                  id="maLoaiNguoiDung"
                  value={maLoaiNguoiDung}
                  name="maLoaiNguoiDung"
                  onChange={this.handleEventInput}
                >
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị</option>
                </select>
              </div>
            </div>
            <div className="card-footer">
              <div className="form-group">
                <button type="submit" className="btn btn-success mr-3">
                  Đăng Ký
                </button>
                <button type="button" className="btn btn-primary">
                  Cập Nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungChinhSua: rootReducer.BTQuanLyNguoiDungReducer.nguoiDungChinhSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
