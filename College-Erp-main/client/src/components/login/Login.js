import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/colorful-background-with-yellow-blue-geometric-pattern_481527-25413.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "full",
        backgroundSize: "cover",
      }}>
      <div className="flex flex-col items-center mt-10 space-y-32">
        <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
          Don Bosco Institute of Technology
        </h1>
        <div className="grid grid-cols-3 gap-28">
          <div className="h-50 w-50 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-60 w-60 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h2 className="text-4xl font-extrabold">Student</h2>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-60 w-60 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h2 className="text-4xl font-extrabold">Admin</h2>
            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-green-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
