import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // ...rest operator spreads in all the other Components
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />; // render component passed into props
        } else {
          return <Redirect to="login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
