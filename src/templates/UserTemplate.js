import React from "react";

import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  let { Component, path } = props;
  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <div className="d-flex">
              <div style={{ height: "100vh" }}>
                <img
                  src="https://i.pravatar.cc/2000"
                  alt=""
                  className="h-100"
                />
              </div>
              <div className="body">
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
