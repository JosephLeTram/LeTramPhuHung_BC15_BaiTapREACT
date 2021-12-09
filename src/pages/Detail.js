import React, { useEffect } from "react";

export default function Detail(props) {
  console.log(props.location);
  useEffect(() => {
    console.log("useEffect call api lấy chi tiết phim ở đây");
  }, []);
  return (
    <div className="container">
      <h3> Detail Page</h3>
      <p>Phim: {props.match.params.maPhim}</p>
    </div>
  );
}
