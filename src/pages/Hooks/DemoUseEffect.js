import React, { useEffect, useState } from "react";

export default function DemoUseEffect(props) {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi component render xong
    console.log("thay thế componentDidMount");
  }, []);

  useEffect(() => {
    console.log(
      "khi nào number thay đổi thì hàm này mới chạy - tương ứng componentDidUpdate"
    );
  }, [number]);

  useEffect(() => {
    return () => {
      console.log(
        "hàm này sẽ thực thi khi component mất khỏi giao diện giống componentWillUnmount"
      );
    };
  }, []);

  console.log("render");

  return (
    <div className="container">
      <h1>Demo Use Effect</h1>
      <br />
      <h3>Number: {number}</h3>
      <h3>like: {like}</h3>
      <button
        className="btn btn-outline-danger btn-danger mt-2 mr-5 text-white"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-outline-success btn-success mt-2 text-white"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
