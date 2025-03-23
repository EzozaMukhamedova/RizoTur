import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="relative flex items-center justify-between px-8 py-4 text-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/somonichi.png')", height: "100px" }}
    >
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

      <div className="flex items-center gap-6 z-10">
        <ShinyButton className="bg-white cursor-pointer">Login</ShinyButton>
      </div>
    </nav>
  );
}
