import React, { Component } from "react";
import { connect } from "react-redux";
class FormDangKy extends Component {

    state = { 
        values: { // Chứa những thông tin người dùng nhập
            taiKhoan: "",
            matKhau : "",
            hoTen: "",
            email: "",
            soDienThoai : "",
            maLoaiNguoiDung: "KhachHang"
        },
        errors: { // Chứa những thông tin lỗi
            taiKhoan: "",
            matKhau : "",
            hoTen: "",
            email: "",
            soDienThoai : "",
            maLoaiNguoiDung: ""
        }
       
    }
    
    handleEventInput = (event) =>{
         // Dựa vào biến event sẽ có thể truy xuất được đến các thông tin của thẻ
         let {id,value,name} = event.target;

         // Mỗi lần nhập liệu sẽ xử lý 2 phần
         // Phần 1 value
         let newValues = {...this.state.values};
         newValues[name] = value;


         //Phần 2 error
         let newErrors = {...this.state.errors};
         let messError = "";

         // Khi người dùng nhập bỏ trống
         if (value.trim() === "" ){
             messError = name + " không được bỏ trống!";
         }

         if (event.target.type ==="email"){
             let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             if (!regexEmail.test(value)){
                 messError = "Email không đúng định dạng!";
             }
         }


         newErrors[name] = messError;

         this.setState({
             value:newValues,
             errors:newErrors,
         })



        //  this.setState({
        //      [name]: value
        //  },)


    }


    handleSubmit = (event) => {
        event.preventDefault(); // Cản sự kiện reload browser

        // Gửi giá trị người dùng nhập vào lên redux
        const action = {
            type: "THEM_NGUOI_DUNG",
            nguoiDung: this.state.values
        }

        this.props.dispatch(action);

    }

  render() {
    return <form onSubmit = {(this.handleSubmit)}className = "card">
        <div className="card-header bg-dark text-white">
            <h3>Form Đăng Ký</h3>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                    <div className ="form-group">
                    <p>Tài Khoản</p>
                    <input className = "form-control" id = "taiKhoan" name ="taiKhoan" onChange = {this.handleEventInput} />
                    <p className ="text text-danger">{this.state.errors.taiKhoan}</p>
                    </div>
                    <div className ="form-group">
                    <p>Mật khẩu</p>
                    <input className = "form-control" id = "matKhau" name ="matKhau" onChange ={this.handleEventInput} />
                    </div>
                    <p className ="text text-danger">{this.state.errors.matKhau}</p>
                    <div className ="form-group">
                    <p>Email</p>
                    <input className = "form-control" id = "email" name ="email" type="email" onChange ={this.handleEventInput} />
                    <p className ="text text-danger">{this.state.errors.email}</p>
                    </div>
                </div>
                <div className="col-6">
                <div className ="form-group">
                    <p>Họ Tên</p>
                    <input className = "form-control" id = "hoTen" name ="hoTen" onChange ={this.handleEventInput} />
                    <p className ="text text-danger">{this.state.errors.hoTen}</p>
                    </div>
                    <div className ="form-group">
                    <p>Số Điện Thoại</p>
                    <input className = "form-control" id = "soDienThoai" name ="soDienThoai" onChange ={this.handleEventInput} />
                    <p className ="text text-danger">{this.state.errors.soDienThoai}</p>
                    </div>
                    <div className ="form-group">
                    <p>Mã Loại Người Dùng</p>
                    <select className = "form-control" id = "maLoaiNguoiDung" name ="maLoaiNguoiDung" onChange ={this.handleEventInput} >
                        <option value ="KhacHang"> 
                            Khách Hàng
                        </option>
                        <option value ="QuanTri">
                            Quản Trị
                        </option>
                    </select>
                    </div>
                </div>
                <div className="card-footer">
                    <div className ="form-group">
                        <button type="submit" className = "btn btn-success mr-3">Đăng Ký</button>
                        <button type="button" className = "btn btn-primary">Cập Nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </form>;
  }
}


export default  connect()(FormDangKy)
