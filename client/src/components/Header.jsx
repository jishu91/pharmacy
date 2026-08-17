import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
  const mainNav = [
    "Buy Medicines",
    "Find Doctors",
    "Lab Tests",
    "Membership",
    "Health Records",
    "Health Insurance",
  ];
  const categories = [
    "Medicines",
    "Baby Care",
    "Nutrition",
    "Women Care",
    "Personal Care",
    "Ayurveda",
    "Health Devices",
    "Wellness",
  ];
  return (
    <header className="w-full bg-white border-b border-slate-200">
      {" "}
      {/* ================= TOP HEADER ================= */}{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="h-16 flex items-center justify-between">
          {" "}
          {/* Logo */}{" "}
          <Link to="/Home">
            <div className="flex items-center">
              {" "}
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                {" "}
                <span className="text-white text-lg font-bold"> M </span>{" "}
              </div>{" "}
              <div className="ml-2">
                {" "}
                <h1 className="text-lg font-bold text-slate-800 leading-none">
                  {" "}
                  Medi<span className="text-blue-600">Care</span>{" "}
                </h1>{" "}
                <p className="text-[8px] text-slate-400 tracking-wider mt-1">
                  {" "}
                  HEALTHCARE{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </Link>
          {/* Delivery Address */}{" "}
          <button className="hidden md:flex items-center gap-2 ml-8 mr-auto px-3 py-2 rounded-lg hover:bg-slate-50 transition">
            {" "}
            <span className="text-blue-600 text-lg"> 📍 </span>{" "}
            <div className="text-left">
              {" "}
              <p className="text-[11px] text-slate-400"> Deliver to </p>{" "}
              <p className="text-sm font-medium text-slate-700">
                {" "}
                Select location{" "}
              </p>{" "}
            </div>{" "}
            <span className="text-slate-400 text-xs"> ▼ </span>{" "}
          </button>{" "}
          {/* Right Side */}{" "}
          <div className="flex items-center gap-2">
            <button
              className="relative w-9 h-9 flex items-center justify-center rounded-lg
    text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              🛒
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">
                2
              </span>
            </button>

            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        </div>{" "}
      </div>{" "}
      {/* ================= MAIN NAVIGATION ================= */}{" "}
      <div className="border-t border-slate-100">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <nav className="flex items-center gap-7 overflow-x-auto">
            {" "}
            {mainNav.map((item, index) => (
              <button
                key={item}
                className={`relative py-3 text-sm whitespace-nowrap transition ${index === 0 ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"}`}
              >
                {" "}
                {item}{" "}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}{" "}
              </button>
            ))}{" "}
          </nav>{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= CATEGORY BAR ================= */}{" "}
      <div className="bg-slate-50 border-t border-slate-100">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="flex items-center gap-6 overflow-x-auto py-2.5">
            {" "}
            {categories.map((item) => (
              <button
                key={item}
                className="text-xs sm:text-sm text-slate-500 whitespace-nowrap hover:text-blue-600 transition"
              >
                {" "}
                {item}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};
export default Header;
