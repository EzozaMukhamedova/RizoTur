"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Navbar from "@/pages/header/page";
import Footer from "@/pages/footer/page";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextAnimate } from "@/components/magicui/text-animate";
import Bulut from "@/components/Bulut";
import { useRouter } from "next/navigation";

export default function Aloqa() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="w-[1440px] h-[80px] m-auto">
        <Navbar />
        <div className="max-w-[880px] mx-auto mt-4">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition cursor-pointer"
            onClick={() => router.push("/")}
          >
            ← Orqaga
          </button>
        </div>
        <ToastContainer />
        <div className="min-h-screen flex flex-col items-center  p-6">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1}
            className="text-[34px] font-bold text-black tracking-wide text-center mb-[50px]"
          >
            Biz bilan bog‘laning
          </TextAnimate>
          {/* <div className="mt-[-500px] z-5 ">
            <Bulut />
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center ">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
              <Phone size={32} className="text-yellow-600" />
              <p className="text-lg font-semibold mt-3">Telefon</p>
              <p className="text-gray-600">+998 94 676 93 73</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
              <Mail size={32} className="text-yellow-600" />
              <p className="text-lg font-semibold mt-3">Email</p>
              <p className="text-gray-600">rizo.travel@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
              <MapPin size={32} className="text-yellow-600" />
              <p className="text-lg font-semibold mt-3">Manzil</p>
              <p className="text-gray-600">Toshkent viloyati, Qorasuv</p>
            </div>
          </div>

          {/* Aloqa Formasi */}
          <div className="mt-8 bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Xabar Yuborish
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Emailingiz"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Xabaringizni yozing..."
                rows="4"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition flex items-center justify-center cursor-pointer"
              >
                <Send className="mr-2" size={18} /> Yuborish
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="mt-8 w-full max-w-4xl h-64 rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps?q=Toytepa,Uzbekistan&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
