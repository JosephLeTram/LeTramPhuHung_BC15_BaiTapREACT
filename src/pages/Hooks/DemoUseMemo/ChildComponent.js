import React, { memo } from "react";

function ChildComponent(props) {
  console.log("comment");

  return (
    <div>
      {props.renderNotify()}
      <br />
      <h3>Like: {props.like}</h3>
      <textarea className="form-control"></textarea> <br />
      <button>Gửi</button>
      <br />
    </div>
  );
}

export default memo(ChildComponent);
