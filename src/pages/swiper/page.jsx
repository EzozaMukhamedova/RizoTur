import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function GreenShopBanner() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_the_United_Arab_Emirates_%283-2%29.svg/800px-Flag_of_the_United_Arab_Emirates_%283-2%29.svg.png",

    "https://images-cdn.ubuy.co.id/6368a4ab40a024404344a553-rhungift-qatar-flag-3x5-ft-outdoor.jpg",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/800px-Flag_of_Thailand.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png",
  ];
  return (
    <>
      {/* <TextAnimate
        animation="blurInUp"
        by="character"
        duration={5}
        className="text-[34px] font-extrabold text-white tracking-wide text-center"
      >
        Shunchaki orzu qilmang, u bilan yashang!
      </TextAnimate> */}

      <div
        className="flex items-center justify-between"
        style={{
          backgroundImage: "url('/bgust3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "780px",
        }}
      >
        {/* <div className="mx-auto z-10">
      <Image src="/bgust.png" alt="Overlay Image" width={1440} height={100} />
      </div> */}

        <div className=" cursor-pointer flex size-full pb-[180px]  items-center justify-center overflow-hidden  border mx-auto  w-[1440px]">
          
          <IconCloud images={images} />
        </div>
      </div>
    </>
  );
}
