import Image from "next/image";

export default function Samolyot() {
  return (
    <div className="relative w-full h-[780px]">
      <Image
        src="/samolyot.png"
        alt="Samolyot"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
    </div>
  );
}
