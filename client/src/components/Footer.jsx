import React from "react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {" "}
      {/* ================= NEWSLETTER ================= */}{" "}
      <div className="border-b border-slate-700">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {" "}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {" "}
            {/* Text */}{" "}
            <div>
              {" "}
              <p className="text-sm font-semibold text-blue-400">
                {" "}
                STAY CONNECTED{" "}
              </p>{" "}
              <h2 className="text-2xl font-bold text-white mt-1">
                {" "}
                Get health updates from MediCare{" "}
              </h2>{" "}
              <p className="text-sm text-slate-400 mt-2">
                {" "}
                Health tips, useful information and special offers.{" "}
              </p>{" "}
            </div>{" "}
            {/* Email */}{" "}
            <div className="flex w-full lg:w-auto">
              {" "}
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-full lg:w-72 px-4 py-3 bg-white text-slate-800 text-sm rounded-l-lg outline-none border border-white "
              />{" "}
              <button className=" px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-r-lg transition ">
                {" "}
                Subscribe{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= MAIN FOOTER ================= */}{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {" "}
          {/* ================= BRAND ================= */}{" "}
          <div className="lg:col-span-2">
            {" "}
            <div className="flex items-center">
              {" "}
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                {" "}
                <span className="text-white text-lg font-bold"> M </span>{" "}
              </div>{" "}
              <div className="ml-2">
                {" "}
                <h2 className="text-xl font-bold text-white">
                  {" "}
                  Medi<span className="text-blue-400">Care</span>{" "}
                </h2>{" "}
                <p className="text-[8px] text-slate-500 tracking-widest">
                  {" "}
                  HEALTHCARE{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <p className="text-slate-400 mt-5 max-w-md text-sm leading-6">
              {" "}
              Making healthcare simple and accessible. Find medicines, doctors,
              diagnostic services and wellness products in one place.{" "}
            </p>{" "}
            {/* Social Buttons */}{" "}
            <div className="flex gap-2 mt-5">
              {" "}
              {["f", "◎", "𝕏", "▶"].map((icon, index) => (
                <button
                  key={index}
                  className=" w-9 h-9 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-semibold hover:bg-blue-600 hover:text-white transition "
                >
                  {" "}
                  {icon}{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* ================= COMPANY ================= */}{" "}
          <div>
            {" "}
            <h3 className="text-sm font-semibold text-white mb-5">
              {" "}
              Company{" "}
            </h3>{" "}
            <div className="space-y-3 text-sm text-slate-400">
              {" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                About Us{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Careers{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Contact Us{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Blog{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Press{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* ================= HEALTHCARE ================= */}{" "}
          <div>
            {" "}
            <h3 className="text-sm font-semibold text-white mb-5">
              {" "}
              Healthcare{" "}
            </h3>{" "}
            <div className="space-y-3 text-sm text-slate-400">
              {" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Buy Medicines{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Find Doctors{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Lab Tests{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Health Insurance{" "}
              </p>{" "}
              <p className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Health Records{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* ================= SUPPORT ================= */}{" "}
          <div>
            {" "}
            <h3 className="text-sm font-semibold text-white mb-5">
              {" "}
              Need Help?{" "}
            </h3>{" "}
            <div className="space-y-4 text-sm">
              {" "}
              <div>
                {" "}
                <p className="text-slate-200 font-medium">
                  {" "}
                  Customer Support{" "}
                </p>{" "}
                <p className="text-slate-400 mt-1"> 1800-123-4567 </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-slate-200 font-medium"> Email </p>{" "}
                <p className="text-slate-400 mt-1">
                  {" "}
                  support@medicare.com{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-slate-200 font-medium">
                  {" "}
                  Availability{" "}
                </p>{" "}
                <p className="text-slate-400 mt-1"> 24 × 7 Support </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= BOTTOM ================= */}{" "}
      <div className="border-t border-slate-800">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {" "}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {" "}
            <p className="text-xs sm:text-sm text-slate-500">
              {" "}
              © 2026 MediCare. All rights reserved.{" "}
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-5 text-xs sm:text-sm text-slate-500">
              {" "}
              <span className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Privacy Policy{" "}
              </span>{" "}
              <span className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Terms & Conditions{" "}
              </span>{" "}
              <span className="hover:text-blue-400 cursor-pointer transition">
                {" "}
                Refund Policy{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
