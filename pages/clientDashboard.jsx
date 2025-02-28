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

      <ClientNavBar />

      <div className="min-h-screen h-fit px-4 bg-blue-50 w-full text-sm md:text-md lg:text-lg">
        <div className="pt-12 grid grid-cols-2 ">
          <div className=" flex">
            <div className=" mb-6">
              <div className="w-[2rem] h-[2rem] md:w-16 md:h-16   rounded-full overflow-hidden flex items-center justify-center shadow-lg">
                <img
                  src="/lucas-lenzi-2RwB3AHphb4-unsplash.jpg"
                  alt="Logo"
                  width={""}
                  height={""}
                  className="object-cover w-10 h-10 md:w-16 md:h-16 "
                />
              </div>
            </div>
            <div className="">
              <div className=" flex">
                {/* loggedin User name */}
                <div className=" pt-2 md:pt-6 lg:pt-8 pl-2 text-gray-800 font-semibold">
                  Hi,{" "}
                </div>
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

        <ClientCaseOverview />
      </div>
    </div>
  );
};

export default ClientDashboard;
