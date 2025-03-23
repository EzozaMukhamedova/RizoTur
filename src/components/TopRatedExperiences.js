"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { experiences } from "../data/experiences";
import { TextAnimate } from "./magicui/text-animate";

export default function TopRatedExperiences() {
  const router = useRouter();

  const handleCardClick = (id) => {
    router.push(`/experience/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 text-center">
      {/* <h2 className="text-[34px] font-bold text-[#135C65] tracking-wide text-center">
        Shunchaki orzu qilmang, u bilan yashang!
      </h2> */}

      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={2}
        className="text-[34px] font-extrabold text-[#135C65] tracking-wide text-center"
      >
        Shunchaki orzu qilmang, u bilan yashang!
      </TextAnimate>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mt-8"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={exp.id || index}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => handleCardClick(exp.id)}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                width={400} // Mos o'lcham qo'ying
                height={300}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform"
                priority
              />
              <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end p-6 text-white">
                <span className="text-sm">{exp.country}</span>
                <h3 className="text-xl font-bold">{exp.title}</h3>
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
  );
}
