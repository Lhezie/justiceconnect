import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

import Greetings from "../components/greetings";

const clientDashboard = () => {
  return (
    <div>
      <ToastContainer />
      <div className=" min-h-screen h-fit px-4 bg-blue-50">
        <div className=" pt-12 flex items-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              <Image
                src="/lucas-lenzi-2RwB3AHphb4-unsplash.jpg"
                width={96}
                height={96}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </div>
          <Greetings />
          <span className="px-2">name</span>
        </div>
      </div>
    </div>
  );
};

export default clientDashboard;
