import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import axios from "axios";
import Greetings from "../components/greetings";
import { IoNotificationsOutline } from "react-icons/io5";

const ClientDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("./api/auth/me", {
          withCredentials: true, // ✅ Ensures cookies are sent
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
      <div className="min-h-screen h-fit px-4 bg-blue-50 w-full">
        <div className="pt-12 flex items-center w-full">
          <div className="flex justify-between">
                      <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              <Image
                src=""
                width={96}
                height={96}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </div>
          <div>Hi!</div>
          <span className="px-2 font-semibold text-gray-800">
            {user ? user?.fullName.split(" ")[0] || user?.fullName : ""}
          </span>
            </div>

                  <div className="">
                  <IoNotificationsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
