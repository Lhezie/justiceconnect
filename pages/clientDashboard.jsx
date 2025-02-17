import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Greetings from "../components/greetings";

const clientDashboard = () => {
  return (
    <div>
      <ToastContainer />
      <div className=" min-h-screen h-fit px-4 bg-blue-50">
        <div className=""><Greetings/></div><span>name</span>
      </div>
    </div>
  );
};

export default clientDashboard;
