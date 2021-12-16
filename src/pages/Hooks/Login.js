import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";

export default function Login(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      email: "",
    },

    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài Khoản không được bỏ trống"),
      matKhau: Yup.string()
        .required("Mật Khẩu không được bỏ trống")
        .min(6, "Mật khẩu từ 6-32 ký tự")
        .max(32, "Mật khẩu từ 6-32 ký tự"),
      email: Yup.string().required("Email không được bỏ trống"),
    }),
    onSubmit: (values) => {
      const action = dangNhapAction(values);

      dispatch(action);
    },
  });

  return (
    <div className="container mt-3">
      <form onSubmit={formik.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <div className="text-danger">{formik.errors.taiKhoan}</div>
          ) : null}
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            className="form-control"
            name="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <div className="text-danger">{formik.errors.matKhau}</div>
          ) : null}
        </div>
        <div className="form-group">
          <p>Nhập lại mật khẩu</p>
          <input
            className="form-control"
            name="nhapLaiMatKhau"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur.bind(e);
              //Gọi thêm 1 hàm kiểm tra gì đó
              if (formik.values.matKhau !== formik.values.nhapLaiMatKhau) {
                formik.setFieldError("nhapLaiMatKhau", "Lỗi nếu muốn bắt lỗi");
              }
            }}
          />
          {formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau ? (
            <div className="text-danger">{formik.errors.nhapLaiMatKhau}</div>
          ) : null}
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <button
            className="btn btn-success"
            type="submit"
            disabled={!formik.isValid}
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}
