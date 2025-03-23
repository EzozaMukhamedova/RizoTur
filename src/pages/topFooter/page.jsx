"use client";

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Iltimos, email kiriting!");
      return;
    }
    toast.success("Xabaringiz yuborildi!");
    setEmail("");
  };
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mizu.png"
          alt="Beach"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Overlay */}
      <div className="relative  bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-2">
          Ekspert maslahatini oling.
        </h2>
        <p className="text-white text-sm mb-4">
          Xabarnoma yuboring va qaror qabul qiling.
        </p>

        {/* Email Input and Button */}
        {/* <div className="flex bg-white rounded-full p-1 overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Email manzili"
            className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-full"
          />
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full ml-2 shadow-md hover:bg-gray-200 cursor-pointer">
           Yuborish
          </button>
        </div> */}

        <div className="flex flex-col items-center space-y-4 mt-10">
          <Toaster position="top-center" />
          {/* <h2 className="text-2xl font-bold">Email yuborish</h2> */}
          <form
            onSubmit={handleSubmit}
            className="flex bg-white rounded-full p-1 overflow-hidden shadow-md"
          >
            <input
              type="email"
              placeholder="Email manzili"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-full"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full ml-2 shadow-md hover:bg-yellow-600 cursor-pointer"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
