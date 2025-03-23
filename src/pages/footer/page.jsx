import Bulut from "@/components/Bulut";
import Image from "next/image";

export default function AdvancedFooter() {
  return (
    <>
      <footer className="relative text-gray-900">
        <div className="absolute inset-0 z-0 mt-[-700px]">
          <Bulut />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto my-[150px] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/rizologo.png"
              alt="Sayohat Agentligi Logosi"
              width={128}
              height={128}
              priority
            />
            <p className="mt-4">
              <span className="font-bold">Rizo Tour Agency </span>- <br />{" "}
              shunchaki orzu qilmang, <br /> u bilan yashang!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Tezkor Havolalar</h3>
            <ul className="list-none space-y-2 cursor-pointer">
              <li className="hover:text-white transition-colors duration-200">
                Bosh sahifa
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Biz haqimizda
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Xizmatlar
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Aloqa
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3 cursor-pointer">
              Aloqa Ma'lumotlari
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src="/location.svg"
                    alt="Manzil"
                    width={24}
                    height={24}
                    className="invert text-white sepia brightness-200 hue-rotate-10"
                  />
                </div>
                <span> Toshkent viloyati, Qorasuv</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src="/call.svg"
                    alt="Telefon"
                    width={24}
                    height={24}
                    className="invert text-white sepia brightness-200 hue-rotate-10"
                  />
                </div>
                <span> 94 676 93 73</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src="/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="invert text-white sepia brightness-200 hue-rotate-10"
                  />
                </div>
                <span>info@sayohatagentligi.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Ijtimoiy Tarmoqlar</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full transition-colors duration-200"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={10}
                  height={20}
                  className="invert sepia brightness-200 hue-rotate-10"
                />
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full transition-colors duration-200"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={14}
                  className="invert sepia brightness-200 hue-rotate-10"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full  transition-colors duration-200"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={16}
                  height={14}
                  className="invert sepia brightness-200 hue-rotate-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-800 mt-8 pt-6 text-center text-sm relative z-10">
          © 2025 Rizo Tour Sayohat Agentligi. Barcha huquqlar himoyalangan.
        </div>

        <div
          className="relative flex items-center justify-between text-gray-100 bg-cover bg-center scale-y-[-1]"
          style={{ backgroundImage: "url('/somonichi.png')", height: "100px" }}
        ></div>
      </footer>
    </>
  );
}
