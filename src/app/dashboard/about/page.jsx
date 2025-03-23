"use client";
import Bulut from "@/components/Bulut";
import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/pages/footer/page";
import Navbar from "@/pages/header/page";
import { useRouter } from "next/navigation";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Xizmat() {
  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <>
      <div className="w-[1440px] h-[80px] m-auto">
        <Navbar />
        <div className="mt-[-500px] z-5 ">
          <Bulut />
        </div>

        <div className="relative min-h-screen  from-[#DDE6F3] to-[#F7F4F8] p-6 mt-[-700px] z-1">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1}
            className="text-[34px] font-bold text-black tracking-wide text-center"
          >
            Biz haqimizda
          </TextAnimate>
          <div className="max-w-[880px] mx-auto ">
            <button
              className="bg-yellow-500 text-white px-4 py-2 mb-[-100px] rounded-md hover:bg-yellow-700 transition cursor-pointer"
              onClick={() => router.push("/")}
            >
              ← Orqaga
            </button>
          </div>
          <section className=" from-[#f8f9fa] to-[#e6e9ec] py-16 px-6">
            <div className="max-w-3xl mx-auto bg-[#ffffff44] shadow-lg rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✈️ Rizo Tour Agency
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Assalomu alaykum aziz obunachilar! <br />
                Biz sayohat qilishni yanada oson va qulay qilishga harakat
                qilamiz. Turistik xizmatlarimiz orqali mijozlarimizga eng yaxshi
                tajribani taqdim etish - bizning asosiy maqsadimiz.
              </p>

              <section className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-lg rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Tajribali jamoa
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Sayohat sohasida ko‘p yillik tajribaga ega mutaxassislar
                    jamoasi.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Ishonchli xizmatlar
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Har bir mijozimizga sifatli va ishonchli xizmat ko‘rsatamiz.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Eng yaxshi narxlar
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Biz mijozlarimizga eng yaxshi narxlarda xizmatlar taqdim
                    etamiz.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    24/7 Qo‘llab-quvvatlash
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Har qanday savollarga javob berish uchun har doim tayyormiz.
                  </p>
                </div>
              </section>
              <section className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-800">
                  Biz bilan bog‘laning
                </h2>
                <p className="text-gray-600 mt-4">
                  Agar sizda savollar bo‘lsa yoki xizmatlarimizdan
                  foydalanmoqchi bo‘lsangiz, biz bilan bog‘laning.
                </p>
                <a
                  href="/dashboard/contact"
                  className="inline-block mt-4 bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition"
                >
                  Aloqaga chiqish
                </a>
              </section>
            </div>

            {/*  Google Maps  */}
            {/* <div className="mt-12 mx-auto w-full max-w-4xl h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps?q=Toytepa,Uzbekistan&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div> */}
          </section>
        </div>

        {/* <TopFooter /> */}
        <Footer />
      </div>
    </>
  );
}
