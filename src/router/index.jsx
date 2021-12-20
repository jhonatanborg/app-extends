import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const isAuthenticated = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
      <PrivateRoute path="/app" component={Home} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
