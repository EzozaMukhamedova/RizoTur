import Bulut from "@/components/Bulut";
import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/pages/footer/page";
import Navbar from "@/pages/header/page";

import { Briefcase, Globe, Hotel, Plane, ShieldCheck, Car } from "lucide-react";

export default function Xizmat() {
  const services = [
    {
      title: "Tur dasturlari",
      icon: Globe,
      description:
        "Dunyoning mashhur shaharlariga eksklyuziv tur paketlari. Antaliya, Istanbul, Dubai, Tbilisi va boshqalar.",
    },
    {
      title: "Mehmonxona bronlash",
      icon: Hotel,
      description:
        "Har qanday byudjetga mos mehmonxonalar va dam olish maskanlari bron qilish xizmati.",
    },
    {
      title: "Transfer xizmatlari",
      icon: Car,
      description:
        "Qulay va xavfsiz transport xizmati: aeroportdan mehmonxonaga yoki sayohat marshrutlari bo‘ylab.",
    },
    {
      title: "Aviabiletlar",
      icon: Plane,
      description:
        "Samolyot va poyezd chiptalarini eng yaxshi narxlarda topib beramiz.",
    },
    {
      title: "Viza xizmati",
      icon: ShieldCheck,
      description:
        "Viza olish jarayonida hujjatlarni tayyorlash va maslahat berish xizmati.",
    },
    {
      title: "Biznes sayohatlar",
      icon: Briefcase,
      description:
        "Kompaniyalar uchun maxsus xizmatlar: konferensiyalar, biznes uchrashuvlar uchun sayohatlar.",
    },
  ];

  return (
    <>
      <div className="w-[1440px] h-[80px] m-auto">
        <Navbar />
        <div className="">
          <Bulut />

          <div className="min-h-screen from-[#DDE6F3] to-[#F7F4F8] pt-6 mt-[-1150px]">
            <TextAnimate
              animation="blurInUp"
              by="character"
              duration={1}
              className="text-[34px] font-bold text-black tracking-wide text-center"
            >
              Bizning Xizmatlar
            </TextAnimate>

            {/* 🔹 Xizmatlar qismi */}
            <section className=" py-16 px-6">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-gray-600 mt-[-50px]">
                  Sayohatni oson va qulay qilish uchun keng qamrovli xizmatlarni
                  taqdim etamiz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {services.map((service, index) => {
                  const Icon = service.icon; // Ikonani to‘g‘ri chaqirish
                  return (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
                    >
                      <Icon className="mx-auto text-yellow-600" size={40} />
                      <h3 className="text-lg font-semibold text-gray-800 mt-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
