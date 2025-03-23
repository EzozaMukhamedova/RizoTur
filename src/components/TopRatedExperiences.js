"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { TextAnimate } from "./magicui/text-animate";
import Bulut from "./Bulut";

const experiences = [
  {
    country: "Fukuoka",
    title: "Fukoka oraollari",
    price: "$149",
    rating: 4.8,
    image: "/fukok.jpg",
  },
  {
    country: "Dubai",
    title: "Abu Dabi",
    price: "$230",
    rating: 5.0,
    image: "/dubai.jpg",
  },
  {
    country: "Ummon",
    title: "Ummon dengizi",
    price: "$350",
    rating: 6.0,
    image: "/umi.png",
  },
  {
    country: "Tropik orollar",
    title: "Tailand",
    price: "$350",
    rating: 6.0,
    image: "/tailand.jpg",
  },
  {
    country: "Saudiya Arabistoni",
    title: "Umra safarlari",
    price: "$550",
    rating: 6.0,
    image: "/umra.jpg",
  },
  {
    country: "Gruziya",
    title: "Gruziya o'rmonlari",
    price: "$450",
    rating: 5.0,
    image: "/gruziya.jpg",
  },
  {
    country: "Japan",
    title: "Yaponiya",
    price: "$450",
    rating: 5.0,
    image: "/japan.jpg",
  },
];

export default function TopRatedExperiences() {
  return (
    <>
      {" "}
      <div className="mt-[-600px]">
        <Bulut />
      </div>
      <div className="max-w-7xl mx-auto py-12 text-center cursor-pointer  mt-[-600px]">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={5}
          className="text-[34px] font-bold text-black tracking-wide text-center"
        >
          Shunchaki orzu qilmang, u bilan yashang!
        </TextAnimate>
        <h2 className="text-3xl font-semibold text-gray-900">
          Eng Qaynoq Joylar
        </h2>
        <div className="flex justify-center space-x-6 mt-6 text-gray-700 ">
          {[
            "World",
            "Africa",
            "Asia",
            "Europe",
            "North America",
            "South America",
            "Antarctica",
            "Australia",
          ].map((continent, index) => (
            <button key={index} className="hover:text-black transition">
              {continent}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mt-8"
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end p-6 text-white">
                  <span className="text-sm">{exp.country}</span>
                  <h3 className="text-xl font-bold cursor-pointer">
                    {exp.title}
                  </h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-2" />
                    <span>{exp.rating}</span>
                  </div>
                  <p className="mt-2 text-lg">{exp.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
