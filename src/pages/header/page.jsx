// import { ShinyButton } from "@/components/magicui/shiny-button";

// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav
//       className="flex items-center justify-between px-8 py-4 bg-cover bg-center text-gray-100 "
//       style={{ backgroundImage: "url('/somonichi.png')", height: "100px" }}
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-3 ">
//         <Image
//           src="/rizologo2.png"
//           alt="Logo"
//           width={50}
//           height={50}
//           priority
//         />
//         <span className="text-2xl font-bold ">RIZO TOUR</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex space-x-6 text-black">
//         {[
//           { name: "Asosiy", path: "/" },
//           { name: "Blog", path: "/dashboard/blog" },
//           { name: "Xizmatlar", path: "/dashboard/service" },
//           { name: "Ma'lumot", path: "/dashboard/about" },
//           { name: "Kontakt", path: "/dashboard/contact" },
//         ].map((link) => (
//           <Link
//             key={link.name}
//             href={link.path}
//             className="text-lg hover:underline underline-offset-4 transition"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       <div className="flex items-center gap-6">
//         <ShinyButton className="bg-white cursor-pointer">Login</ShinyButton>;
//       </div>
//     </nav>
//   );
// }
// 22222222222222222222
// import { ShinyButton } from "@/components/magicui/shiny-button";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="relative flex items-center justify-between px-8 py-4 text-gray-100">
//       {/* Background Blur */}
//       <div className="absolute inset-0 bg-[#ffffff] bg-opacity-10 backdrop-blur-md rounded-full mx-auto w-[500px] h-[60px]"></div>

//       {/* Logo */}
//       <div className="flex items-center gap-3 z-10">
//         <Image
//           src="/rizologo2.png"
//           alt="Logo"
//           width={50}
//           height={50}
//           priority
//         />
//         <span className="text-2xl font-bold text-black">RIZO TOUR</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex space-x-6 text-black z-10">
//         {[
//           { name: "Asosiy", path: "/" },
//           { name: "Blog", path: "/dashboard/blog" },
//           { name: "Xizmatlar", path: "/dashboard/service" },
//           { name: "Ma'lumot", path: "/dashboard/about" },
//           { name: "Kontakt", path: "/dashboard/contact" },
//         ].map((link) => (
//           <Link
//             key={link.name}
//             href={link.path}
//             className="text-lg hover:underline underline-offset-4 transition"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       {/* Login Button */}
//       <div className="flex items-center gap-6 z-10">
//         <ShinyButton className="bg-white cursor-pointer">Login</ShinyButton>
//       </div>
//     </nav>
//   );
// }

// 333333333333333
import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="relative flex items-center justify-between px-8 py-4 text-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/somonichi.png')", height: "100px" }}
    >
      {/* Shaffof fonli navbar container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-3 flex space-x-6">
        {[
          { name: "Bosh sahifa", path: "/" },
          // { name: "Blog", path: "/dashboard/blog" },
          { name: "Biz haqimizda", path: "/dashboard/about" },
          { name: "Xizmatlar", path: "/dashboard/xizmat" },
          { name: "Aloqa", path: "/dashboard/contact" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-lg text-gray-600 transition-all duration-300 hover:text-gray-900 hover:font-semibold hover:scale-105"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-3 z-10">
        <Image
          src="/rizologo2.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-2xl font-bold text-white">RIZO TOUR</span>
      </div>

      {/* Login Button */}
      <div className="flex items-center gap-6 z-10">
        <ShinyButton className="bg-white cursor-pointer">Login</ShinyButton>
      </div>
    </nav>
  );
}
