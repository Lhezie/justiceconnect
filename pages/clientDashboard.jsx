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

        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clientDashboard;
