import React from "react";
import { Carousel } from "antd";

export default function DemoCarousel() {
  const contentStyle = {
    height: "560px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel effect="fade" className="mt-5">
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <img
            src="https://i.pravatar.cc/1000?u=160"
            width={1000}
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <img
            src="https://i.pravatar.cc/1000?u=120"
            width={1000}
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <img
            src="https://i.pravatar.cc/1000?u=1"
            width={1000}
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <img
            src="https://i.pravatar.cc/1000?u=121313"
            width={1000}
            alt=""
            style={contentStyle}
          />
        </div>
      </Carousel>
      ,
    </div>
  );
}
