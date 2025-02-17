import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Greetings from "../components/greetings";

const clientDashboard = () => {
  return (
    <div>
      <ToastContainer />
      <div className=" min-h-screen h-fit px-4 bg-blue-50">
        <div className=" pt-12 flex">
                  <Greetings />
                  <span className="px-2">name</span>
        </div>
        
      </div>
    </div>
  );
};

export default clientDashboard;
