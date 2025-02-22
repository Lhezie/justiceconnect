import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import axios from "axios";
import Greetings from "../components/greetings";

const ClientDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("./api/auth/me", {
          withCredentials: true, // ✅ Ensures cookies are included
          headers: {
            "Content-Type": "application/json",
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error("Fetch User Error:", error.response?.data);
        toast.error(error?.response?.data?.message || "Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="min-h-screen h-fit px-4 bg-blue-50">
        <div className="pt-12 flex items-center">
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
          <span className="px-2 font-semibold text-gray-800">
            {user ? user.fullName : "Loading..."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
