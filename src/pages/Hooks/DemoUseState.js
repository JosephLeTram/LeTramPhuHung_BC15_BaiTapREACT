import React, { useState } from "react";

export default function DemoUseState(props) {
  /* Class tương đương
    this.state = {like:1} 
  */
  //   let [state, setState] = useState({
  //     like: 1,
  //   });

  let [like, setLike] = useState(1);

  return (
    <div className="container">
      <div className="card w-25">
        <img src="https://i.pravatar.cc/200" alt="..." />
        <div className="card-body">
          <p className="text-danger">{like} ♥</p>
          <br />
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            ♥ like
          </button>
        </div>
      </div>
    </div>
  );
}
