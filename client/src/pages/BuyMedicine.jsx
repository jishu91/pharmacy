import React from "react";

const BuyMedicine = () => {
  const services = [
    {
      icon: "💊",
      title: "Medicine Offers",
      subtitle: "UPLOAD PRESCRIPTION",
      bg: "bg-cyan-50",
      iconBg: "bg-cyan-100",
    },
    {
      icon: "🩺",
      title: "Doctor Appointment",
      subtitle: "BOOK NOW",
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
    },
    {
      icon: "🛡️",
      title: "Health Insurance",
      subtitle: "EXPLORE PLANS",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
    },
    {
      icon: "🔬",
      title: "Lab Tests",
      subtitle: "AT HOME",
      bg: "bg-rose-50",
      iconBg: "bg-rose-100",
    },
  ];

  const conditions = [
    {
      icon: "🩸",
      title: "Diabetes Care",
    },
    {
      icon: "❤️",
      title: "Cardiac Care",
    },
    {
      icon: "🫃",
      title: "Stomach Care",
    },
    {
      icon: "🦴",
      title: "Pain Relief",
    },
    {
      icon: "🫁",
      title: "Respiratory Care",
    },
    {
      icon: "🦷",
      title: "Oral Care",
    },
    {
      icon: "🧠",
      title: "Brain & Mental Wellness",
    },
    {
      icon: "👩",
      title: "Women's Health",
    },
    {
      icon: "👴",
      title: "Elderly Care",
    },
    {
      icon: "🛡️",
      title: "Cold & Immunity",
    },
    {
      icon: "👁️",
      title: "Eye Care",
    },
    {
      icon: "🌿",
      title: "Ayurveda & Wellness",
    },
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#073f40] via-[#075b5b] to-[#087f80]">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-400/10"></div>

        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-teal-300/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-cyan-100 text-sm mb-5">
              <span>✦</span>
              Trusted healthcare at your fingertips
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Healthcare Made
              <span className="text-cyan-300"> Simple</span>
            </h1>

            <p className="text-teal-100 mt-4 text-base md:text-lg">
              Medicines, wellness products and healthcare services — all in one
              place.
            </p>

            {/* Search */}
            <div className="mt-8 relative max-w-3xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <span className="text-xl text-teal-700">🔍</span>
              </div>

              <input
                type="text"
                placeholder="Search medicines, products, brands..."
                className="w-full h-16 bg-white rounded-2xl pl-14 pr-32 text-gray-800 outline-none shadow-2xl border-2 border-transparent focus:border-cyan-300 placeholder:text-gray-400"
              />

              <button className="absolute right-2 top-2 bottom-2 px-6 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl transition">
                Search
              </button>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-teal-100">
              <span>✓ Genuine Products</span>
              <span>✓ Fast Delivery</span>
              <span>✓ Easy Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.bg} rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center text-2xl`}
                >
                  {service.icon}
                </div>

                <span className="text-xl text-gray-600">→</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-1 text-xs font-bold tracking-wide text-teal-700">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-sm font-bold text-teal-600 tracking-wider">
              EXPLORE HEALTHCARE
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
              Browse by Health Condition
            </h2>
          </div>

          <button className="hidden md:block text-teal-700 font-bold hover:text-teal-900">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className="group flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl hover:border-teal-400 hover:shadow-md transition cursor-pointer"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gray-50 group-hover:bg-teal-50 flex items-center justify-center text-2xl transition">
                {condition.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-800 group-hover:text-teal-700 transition">
                  {condition.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">Shop products</p>
              </div>

              <span className="text-gray-300 group-hover:text-teal-600 transition">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROMO ================= */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-teal-700 to-cyan-600 px-7 md:px-12 py-10">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block bg-white/15 text-cyan-100 text-xs font-bold px-3 py-1.5 rounded-full">
                HEALTHCARE AT YOUR DOORSTEP
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
                Everything you need to stay healthy
              </h2>

              <p className="text-teal-50 mt-3">
                Order medicines and wellness products from the comfort of your
                home.
              </p>

              <button className="mt-6 bg-white text-teal-700 font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition">
                Start Shopping →
              </button>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block text-8xl opacity-20">
              💊
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BuyMedicine;
