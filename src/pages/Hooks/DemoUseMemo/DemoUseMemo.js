import React, { useState, useMemo, useCallback } from "react";
import ChildComponent from "./ChildComponent";
import Cart from "./Cart";

let cart = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "htc phone", price: 2000 },
  { id: 3, name: "lg phone", price: 3000 },
];
export default function DemoUseMemo(props) {
  let [like, setLike] = useState(1);
  let renderNotify = () => {
    return `Bạn đã thả ${like}  ♥ !`;
  };

  //   const cartMemo = useMemo(() => cart, []);

  const callBackRenderNotify = useCallback(renderNotify, [like]);

  return (
    <div className="container m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <ChildComponent renderNotify={callBackRenderNotify} />
      <br />
      {/* <h3>Demo Cart</h3>
      <Cart cart={cart} /> */}
    </div>
  );
}
