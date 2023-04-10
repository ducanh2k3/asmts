import { IProduct } from "../models";
import { useState, useEffect } from "react";
import { getAll } from "../api/product";
import Adminside from "./adminsidebar";
import Main from "./adminmain";

const Adminbody = () => {
  return (
    <div className="container mx-auto flex gap-5">
      <div className="w-[300px]">
        <Adminside></Adminside>
      </div>
      <div className=" bg-slate-100 w-full">
        <div className=" py-2 my-3">
          <Main></Main>
        </div>
      </div>
    </div>
  );
};

export default Adminbody;
