"use client"; // Ensure client-side rendering

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaUser, FaEnvelope, FaLock, FaUserTie, FaChevronDown, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientRegisterPage() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "",
  });

  // Password Visibility State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password ) {
      toast.error("Please fill all required fields!");
      return;
    }

    toast.success("Signup Successful! Redirecting...");
    setTimeout(() => {
      router.push("/clientLoginPage");
    }, 2000);
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen h-fit px-4">
        <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              <Image src="/LogoOnee.png" width={96} height={96} alt="Logo" className="object-contain" />
            </div>
          </div>

          {/* TABS WITH ACTIVE UNDERLINE */}
          <div className="flex justify-between mb-4 text-lg font-semibold relative border-b border-gray-300">
            <button
              onClick={() => router.push("/clientRegisterPage")}
              className={`w-1/2 text-center pb-2 relative ${pathname === "/clientRegisterPage" ? "text-black font-bold" : "text-gray-500"}`}
            >
              SIGN UP
              {pathname === "/clientRegisterPage" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />}
            </button>

            <button
              onClick={() => router.push("/clientLoginPage")}
              className={`w-1/2 text-center pb-2 relative ${pathname === "/clientLoginPage" ? "text-black font-bold" : "text-gray-500"}`}
            >
              LOGIN
              {pathname === "/clientLoginPage" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />}
            </button>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center bg-gray-100 p-3 rounded-md shadow-md">
              <FaUser className="text-gray-600 mr-3" />
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="bg-transparent outline-none w-full inputblack" />
            </div>

            <div className="flex items-center bg-gray-100 p-3 rounded-md shadow-md">
              <FaEnvelope className="text-gray-600 mr-3" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="bg-transparent outline-none w-full inputblack" />
            </div>

            {/* Password Input with Eye Icon */}
            <div className="relative flex items-center bg-gray-100 p-3 rounded-md shadow-md">
              <FaLock className="text-gray-600 mr-3" />
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="bg-transparent outline-none w-full inputblack" />
              <button type="button" className="absolute right-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative flex items-center  p-3 rounded-md shadow-md">
              <FaLock className="text-gray-600 mr-3" />
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="bg-transparent outline-none w-full inputblack" />
              <button type="button" className="absolute right-3 text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Phone Number Input */}
            <div className="flex items-center bg-gray-100 p-3 rounded-md shadow-md">
              <BiSolidPhoneCall className="text-gray-600 mr-3" />
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="bg-transparent outline-none w-full inputblack" />
            </div>

           

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-400 text-white p-3 rounded-md font-semibold">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
