import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export default function DemoHookRedux(props) {
  let { arrContent } = useSelector(
    (rootReducer) => rootReducer.FacebookAppReducer
  );
  console.log("arrContent", arrContent)
  const [state, setState] = useState({
    name: "",
    content: "",
  });
  const dispatch = useDispatch();

  const sendComment = () => {
    const action = {
      type: "ADD_COMMENT",
      comment: state,
    };

    dispatch(action);
  };

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    setState({
      ...state, // Luu giữ lại các giá trị cũ trc khi setState
      [name]: value,
    });
    console.log("state", state);
  };

  return (
    
    <div className="container">
      <h3> Demo Hook Redux</h3>

      <div className="card">
        <div className="card-header">
          {arrContent.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img src="https://i.pravatar.cc/50?u=a" alt="..." />
                </div>
                <div className="col-10">
                  <h3 className="text-danger">{comment.name}</h3>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
          
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              className="form-control"
              name="content"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-success"
              onClick={() => {
                sendComment();
              }}
            >
              Send!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (rootReducer) => {
//   return {
//     arrContent: rootReducer.FacebookAppReducer.arrContent,
//   };
// };

// export default connect(mapStateToProps)(DemoHookRedux);
