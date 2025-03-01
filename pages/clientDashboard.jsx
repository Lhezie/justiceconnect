import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuthProvider from "../store/authProvider";
import { Formateddate } from "../utils/date";

import ClientLayout from "../components/clientLayout";
import { useRouter } from "next/navigation";
import Loader from "../components/loader";

// const Loader = dynamic(() => import("../components/loader.jsx"), { ssr: false });

const ClientDashboard = () => {
  const { user, setUser } = UseAuthProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Local loading state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("./api/auth/me", {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        if (data?.user) {
          setUser(data.user);
          setLoading(false); // Stop loading when user is found
        } else {
          router.push("/login"); // Redirect to login page if no user
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        router.push("/login"); // Redirect to login on error
      }
    };

    fetchUserData();
  }, [router, setUser]);

  if (loading) return <Loader />;

  return (
    <ClientLayout>
      <div className="text-sm md:text-md lg:text-md">
        <div className="text-end ">
          <Formateddate />
        </div>

        <div className="">
          Hi, <span className="font-bold">{user?.fullName}</span>
        </div>
        <div className="pt-2">case Overview</div>

        <div className="w-32 h-16 rounded-lg bg-gray-400 hover:bg-blue-400 text-xs md:text-md lg:text-md">
          <span className="flex justify-center item-center">
            submited cases
          </span>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientDashboard;
