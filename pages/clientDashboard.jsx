import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import axios from "axios";
import Greetings from "../components/greetings";
import { IoNotificationsOutline } from "react-icons/io5";
import UseAuthProvider from "../store/authProvider";
import { Formateddate } from "../utils/date";
import { ClientCaseOverview } from "../components/clientCaseOverview";
import { ClientNavBar } from "../components/clientNavBar";


const ClientDashboard = () => {
  // const [user, setUser] = useState(null);
  const { user, setUser } = UseAuthProvider();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("./api/auth/me", {
          withCredentials: true, // Ensures cookies are sent
          headers: { "Content-Type": "application/json" },
        });

        if (response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          toast.error("No user data found.");
        }
      } catch (error) {
        console.error("Fetch User Error:", error.response?.data);
        toast.error(
          error.response?.data?.message || "Failed to fetch user data."
        );
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
          <ToastContainer />
          
         {/* <ClientNavBar/> */}
        
          <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

     
        <div className="min-h-screen h-fit px-4 bg-blue-50 w-full text-sm md:text-md lg:text-lg">
              
        <div className="pt-12 grid grid-cols-2 ">
          <div className=" flex">
            <div className=" mb-6">
              <div className="w-[2rem] h-[2rem] md:w-16 md:h-16 lg:w-24 lg:h-24  rounded-full overflow-hidden flex items-center justify-center shadow-lg">
                <img
                  src="/lucas-lenzi-2RwB3AHphb4-unsplash.jpg"
                  alt="Logo"
                  width={""}
                  height={""}
                  className="object-cover w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24"
                />
              </div>
            </div>
            <div className="">
              <div className=" flex">
                {/* loggedin User name */}
                <div className=" pt-2 md:pt-6 lg:pt-8 pl-2 text-gray-800 font-semibold">Hi, </div>
                <span className="px-2 font-semibold text-gray-800 pt-2 md:pt-6 lg:pt-8 ">
                  {user ? user?.fullName.split(" ")[0] || user?.fullName : ""}
                </span>
              </div>

              {/* date */}
              <div className="pl-2">
                <Formateddate />
              </div>
            </div>
          </div>
          {/* notification */}
          <div className="grid justify-end pt-2 md:pt-6 lg:pt-8 font-bold">
            <IoNotificationsOutline className="text-xl md:text-2xl lg:text-3xl text-blue-500" />
                  </div>
                  
                  {/* case overview */}
                
              </div>
              
              <ClientCaseOverview/>
      </div>
    </div>
  );
};

export default ClientDashboard;
