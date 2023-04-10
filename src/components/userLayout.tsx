import { Outlet } from "react-router-dom";
import React from "react";
import Cover from "./cover";

import UserFooter from "./userFooter";
import UserHeader from "./userHeader";
import Slider from "./slider";

const UserLayout = () => {
  return (
    <React.Fragment>
      <UserHeader />

      <Outlet />

      <UserFooter />
    </React.Fragment>
  );
};

export default UserLayout;
