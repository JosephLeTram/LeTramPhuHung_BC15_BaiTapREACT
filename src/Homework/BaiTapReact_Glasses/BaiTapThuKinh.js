import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return this.arrGlasses.map((glassItem, index) => {
      return (
        <img
          key={index}
          src={glassItem.url}
          alt=""
          style={{ width: "96px", cursor: "pointer" }}
          className="ml-2 p-2 border border-width-1"
          onClick={() => {
            this.changeGlass(glassItem);
          }}
        />
      );
    });
  };

  changeGlass = (newGlass) => {
    this.setState({
      glassesCurrent: newGlass,
    });
  };

  render() {
    const glassesCurrent = this.state.glassesCurrent;
    const keyFrames = `@keyframes glassChangeAnimation${Date.now()} {
      from {width:0px;
        transform:  rotate(45deg);
        opacity:0;
      }
      to {width: 150px; transform:rotate(0deg); opacity: 0.7;}
    }`;
    const styleGlasses = {
      position: "absolute",
      width: "150px",
      top: "75px",
      left: "195px",
      opacity: "0.7",
      transform: "rotate(0deg)",
      animation: `glassChangeAnimation${Date.now()} 1.5s`,
    };
    const styleDesc = {
      position: "absolute",
      width: "47%",
      bottom: "16px",
      left: "143px",
      backgroundColor: "rgba(79,79,79, 0.6)",
    };

    // Render Animation

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backGroundPosition: "center",
        }}
      >
        <style>{keyFrames}</style>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: "2000px" }}
        >
          <h3
            style={{ backgroundColor: "rgba(139,0,139, 0.3)" }}
            className=" text-white text-center display-5 p-2"
          >
            Bài Tập Thử Kính Online
          </h3>

          {/* DIv chứa hình người mẫu */}
          <div className="container text-center mt-5">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="./glassesImage/model.jpg"
                    alt="model"
                    height="300"
                    width="250"
                  />

                  {/* data binding để xử lý chuyển đối state */}
                  <img
                    src={glassesCurrent.url}
                    alt="glasses"
                    style={styleGlasses}
                    className="changeAnimation"
                  />
                  <div style={styleDesc}>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {glassesCurrent.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "white" }}>
                      {glassesCurrent.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="model"
                  height="300"
                  width="250"
                />
              </div>
            </div>
          </div>
          {/*  Div chứa các kính  */}
          <div className="container bg-light mt-5 p-5 text-center d-flex justify-content-around">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
