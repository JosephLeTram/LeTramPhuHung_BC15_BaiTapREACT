import React, { useRef, useState } from "react";

export default function DemoUseRef() {
  const [keyWord, setKeyWord] = useState("");
  let tuKhoaVuaTimDuoc = useRef("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const search = (e) => {
    //Lấy ra giá trị search value từ input
    let { value } = e.target;

    setKeyWord(value);
  };
  const handleSearch = () => {
    tuKhoaVuaTimDuoc.current = keyWord;
    console.log(keyWord);
  };

  const handleLogin = () => {
    console.log("username", usernameRef.current.value);
    console.log("password", passwordRef.current.value);
  };
  return (
    <div className="container mt-3">
      <h3>Từ Khóa vừa tìm: {tuKhoaVuaTimDuoc.current}</h3>
      <input className="form-control" onChange={search} />
      <button
        className="mt-2 btn btn-success"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
      <hr />
      <h3>Login</h3>
      <div className="form-group">
        <p>Username</p>
        <input ref={usernameRef} className="form-control" name="Username" />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input ref={passwordRef} className="form-control" name="Password" />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
