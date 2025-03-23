"use client";

import { useParams } from "next/navigation";
import { experiences } from "../../../data/experiences";
import { FaStar } from "react-icons/fa";
import Navbar from "@/pages/header/page";
import Footer from "@/pages/footer/page";

import { useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Lens } from "@/registry/magicui/lens";

export default function ExperienceDetail() {
  const params = useParams();
  const id = Number(params.id);
  const experience = experiences.find((exp) => exp.id === id);

  const router = useRouter();

  if (!experience) {
    return <div className="text-center text-red-500">Ma'lumot topilmadi!</div>;
  }

  return (
    <>
      <div className="mx-auto w-[1440px]">
        <Navbar />
        <div className="max-w-[800px] mx-auto mt-4">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition cursor-pointer"
            onClick={() => router.push("/")}
          >
            ← Orqaga
          </button>
        </div>
        <div className="max-w-[800px] mx-auto py-12 px-8 my-[50px] from-blue-50 to-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="relative">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <h1 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-md">
              {experience.title}
            </h1>
          </div>

          <div className="mt-6 p-6 bg-white rounded-xl shadow-md">
            <p className="text-gray-700 text-lg">{experience.description}</p>

            <div className="flex items-center justify-between mt-6">
              <p className="text-2xl font-semibold text-[#038578]">
                Narx: {experience.price}
              </p>
              <p className="text-lg flex items-center text-gray-800">
                <FaStar className="text-yellow-400 text-2xl mr-1" />
                {experience.rating} Reyting
              </p>
            </div>
          </div>
        </div>

        {/* 図書館のカードを使えなかった */}
        {/* <Card className="relative max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-3xl overflow-hidden">

          <CardHeader className="relative">
            <Lens
              zoomFactor={2.5}
              lensSize={180}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </Lens>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <h1 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-md">
              {experience.title}
            </h1>
          </CardHeader>


          <CardContent className="p-6">
            <CardDescription className="text-gray-700 text-lg">
              {experience.description}
            </CardDescription>

            <div className="flex items-center justify-between mt-6">
              <p className="text-2xl font-semibold text-indigo-600">
                Narx: {experience.price}
              </p>
              <p className="text-lg flex items-center text-gray-800">
                <FaStar className="text-yellow-400 text-2xl mr-1" />
                {experience.rating} Reyting
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between px-6 pb-6">
            <Button className="px-6 py-3 text-lg">Buyurtma berish</Button>
            <Button variant="secondary" className="px-6 py-3 text-lg">
              Keyinroq
            </Button>
          </CardFooter>
        </Card> */}
        <Footer />
      </div>
    </>
  );
}
