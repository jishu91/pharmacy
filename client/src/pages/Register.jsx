import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4fbfd] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center items-center mb-5">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>

          <h1 className="ml-2 text-xl font-bold text-slate-800">
            Medi<span className="text-blue-600">Care</span>
          </h1>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>

          <p className="text-sm text-slate-500 mt-1">
            Join MediCare and manage your healthcare
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-slate-300
                outline-none
                text-slate-700
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-slate-300
                outline-none
                text-slate-700
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-slate-300
                outline-none
                text-slate-700
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="
                  w-full
                  px-3
                  py-2.5
                  pr-14
                  rounded-lg
                  border
                  border-slate-300
                  outline-none
                  text-slate-700
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-xs
                  text-slate-500
                  hover:text-blue-600
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mt-0.5 accent-blue-600"
            />

            <label htmlFor="terms" className="text-xs text-slate-500 leading-5">
              I agree to the{" "}
              <span className="text-blue-600 font-medium">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 font-medium">Privacy Policy</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="
              w-full
              py-2.5
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              rounded-lg
              transition
            "
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-slate-200" />

          <span className="text-xs text-slate-400">OR</span>

          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Google */}
        <button
          className="
            w-full
            py-2.5
            border
            border-slate-300
            rounded-lg
            text-sm
            font-medium
            text-slate-700
            hover:bg-slate-50
            transition
          "
        >
          Continue with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-slate-500 mt-5">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 text-blue-600 font-semibold hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
