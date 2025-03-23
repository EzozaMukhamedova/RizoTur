// import Image from "next/image";
// export default function TopFooter() {
//   return (
//     <div className="flex">
//       <div className="border-r m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
//         <Image
//           src="/footer_flower_1.svg"
//           alt="gul"
//           width={100}
//           height={100}
//           style={{ width: "auto", height: "auto" }}
//           priority
//         />
//         <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
//         <p className="font-light text-xs">
//           We are an online plant shop offering a wide range of cheap and trendy
//           plants.
//         </p>
//       </div>
//       <div className="border-r  m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
//         <Image
//           src="/footer_flower_2.svg"
//           alt="gul"
//           width={100}
//           height={100}
//           style={{ width: "auto", height: "auto" }}
//           priority
//         />
//         <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
//         <p className="font-light text-xs">
//           We are an online plant shop offering a wide range of cheap and trendy
//           plants.
//         </p>
//       </div>
//       <div className=" w-[200px]  m-[23px] pr-[23px] h-[210px] ">
//         <Image
//           src="/footer_flower_1.svg"
//           alt="gul"
//           width={100}
//           height={100}
//           style={{ width: "auto", height: "auto" }}
//           priority
//         />
//         <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
//         <p className="font-light text-xs">
//           We are an online plant shop offering a wide range of cheap and trendy
//           plants.
//         </p>
//       </div>
//       <div className="p-[23px] w-[473.68px]">
//         <h3 className="font-bold text-base mt-[17px] mb-[9px]">
//           Would you like to join newsletters?
//         </h3>
//         <div className="flex w-full h-[40px] mb-[17px]">
//           <input
//             className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
//             placeholder="enter your email address..."
//           />
//           <button className="bg-[#46A358] flex  items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-none rounded-e-xl">
//             JOIN
//           </button>
//         </div>
//         <p className="font-light text-xs leading-6">
//           We usually post offers and challenges in newsletter. We’re your online
//           houseplant destination. We offer a wide range of houseplants and
//           accessories shipped directly from our (green)house to yours!{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10">
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
        <div className="flex bg-white rounded-full p-1 overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Email manzili"
            className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-full"
          />
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full ml-2 shadow-md hover:bg-gray-200 cursor-pointer">
           Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
