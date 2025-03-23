// import Image from "next/image";
// export default function Footer() {
//   return (
//     <>
//       <div className="flex bg-white justify-between p-[23px] max-lg:flex-col max-lg:items-center gap-2.5 text-black">
//         <div>
//           <Image
//             src="/rizologo2.png"
//             alt="gul"
//             width={100}
//             height={100}
//             style={{ width: "auto", height: "auto" }}
//             priority
//           />
//         </div>
//         <div className="flex gap-2.5 items-center">
//           <Image
//             src="/location.svg"
//             alt="location"
//             width={100}
//             height={100}
//             style={{ width: "auto", height: "auto" }}
//             priority
//             className="w-5 h-5"
//           />
//           <p className="text-sm">
//             70 West Buckingham Ave. <br /> Farmingdale, NY 11735
//           </p>
//         </div>
//         <div className="flex gap-2.5 items-center">
//           <Image
//             src="/email.svg"
//             alt="email"
//             width={100}
//             height={100}
//             style={{ width: "auto", height: "auto" }}
//             priority
//             className="w-5 h-5"
//           />
//           <p className="text-sm">contact@greenshop.com</p>
//         </div>
//         <div className="flex gap-2.5 items-center">
//           <Image
//             src="/call.svg"
//             alt="call"
//             width={100}
//             height={100}
//             style={{ width: "auto", height: "auto" }}
//             priority
//             className="w-5 h-5"
//           />
//           <p className="text-sm">+88 01911 717 490</p>
//         </div>
//       </div>
//       <div className="flex justify-between p-[23px] max-sm:flex-col max-sm:gap-4 bg-white">
//         <div className="flex flex-1 flex-col gap-2.5">
//           <h3 className="font-bold">My Account</h3>
//           <p className="font-light cursor-pointer">My Account</p>
//           <p className="font-light cursor-pointer">Address</p>
//           <p className="font-light cursor-pointer">Wishlist</p>
//         </div>
//         <div className="flex-1 flex flex-col gap-2.5">
//           <h3 className="font-bold">Categories</h3>
//           <p className="font-light cursor-pointer">House Plants</p>
//           <p className="font-light cursor-pointer">Potter Plants</p>
//           <p className="font-light cursor-pointer">Seeds</p>
//           <p className="font-light cursor-pointer">Small Plants</p>
//           <p className="font-light cursor-pointer">Accessories</p>
//         </div>
//         <div className="flex-1">
//           <h3 className="font-bold">Social Media</h3>
//           <div className="flex gap-3 mt-[20px] bg-white">
//             <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
//               <Image
//                 src="/facebook.svg"
//                 alt="facebook"
//                 width={100}
//                 height={100}
//                 style={{ width: "auto", height: "auto" }}
//                 priority
//                 className="w-5 h-5"
//               />
//             </div>
//             <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-white">
//               <Image
//                 src="/instagram.svg"
//                 alt="instagram"
//                 width={100}
//                 height={100}
//                 style={{ width: "auto", height: "auto" }}
//                 priority
//                 className="w-5 h-5"
//               />
//             </div>
//             <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
//               <Image
//                 src="/twitter.svg"
//                 alt="twitter"
//                 width={100}
//                 height={100}
//                 style={{ width: "auto", height: "auto" }}
//                 priority
//                 className="w-5 h-5"
//               />
//             </div>
//             <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
//               <Image
//                 src="/linkedin.svg"
//                 alt="linkedin"
//                 width={100}
//                 height={100}
//                 style={{ width: "auto", height: "auto" }}
//                 priority
//                 className="w-5 h-5"
//               />
//             </div>
//             <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
//               <Image
//                 src="/union.svg"
//                 alt="union"
//                 width={100}
//                 height={100}
//                 style={{ width: "auto", height: "auto" }}
//                 priority
//                 className="w-5 h-5"
//               />
//             </div>
//           </div>
//           <h3 className="font-bold mt-[33px]">We accept</h3>
//           <div className="flex gap-3 mt-[20px] ">
//             <Image
//               src="/paypal.svg"
//               alt="paypal"
//               width={100}
//               height={100}
//               priority
//               className="w-[30px] h-[30px] cursor-pointer"
//             />
//             <Image
//               src="/mastercard (1).svg"
//               alt="mastercard"
//               width={100}
//               height={100}
//               priority
//               className="w-[30px] h-[30px] cursor-pointer"
//             />
//             <Image
//               src="/visaCard.svg"
//               alt="visa"
//               width={100}
//               height={100}
//               priority
//               className="w-[30px] h-[30px] cursor-pointer"
//             />
//             <Image
//               src="/amex.svg"
//               alt="amex"
//               width={100}
//               height={100}
//               priority
//               className="w-[30px] h-[30px] cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
//       <h3 className="text-center p-[10px] font-normal text-sm bg-white">
//         © 2023 GreenShop. All Rights Reserved.
//       </h3>
//     </>
//   );
// }

// import Image from "next/image";

// export default function TravelAgencyFooter() {
//   return (
//     <>
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <Image src="/travel-logo.png" alt="Sayohat Agentligi Logosi" width={150} height={150} priority />
//             <p className="mt-2">Biz bilan sayohat qiling va dunyoni siz tasavvur qilmagan usullarda kashf eting!</p>
//           </div>
//           <div>
//             <h3 className="font-bold mb-3">Tezkor Havolalar</h3>
//             <ul className="space-y-2">
//               <li className="cursor-pointer">Bosh sahifa</li>
//               <li className="cursor-pointer">Biz haqimizda</li>
//               <li className="cursor-pointer">Xizmatlar</li>
//               <li className="cursor-pointer">Aloqa</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-3">Biz bilan Bog'lanish</h3>
//             <p>123 Sarguzasht Ko'chasi</p>
//             <p>Yangi Shahar, Yer 12345</p>
//             <p>+123 456 7890</p>
//             <p>info@sayohatagentligi.com</p>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
//           © 2023 Sayohat Agentligi. Barcha huquqlar himoyalangan.
//         </div>
//       </footer>
//     </>
//   );
// }

import Bulut from "@/components/Bulut";
import Image from "next/image";

export default function AdvancedFooter() {
  return (
    <>
      {/* <div className="">
    <Bulut />
    </div> */}

      <footer className=" text-gray-900 py-10 ">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © 2025 Rizo Tour Sayohat Agentligi. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </>
  );
}
