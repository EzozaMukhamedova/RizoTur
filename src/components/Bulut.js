import React from "react";

export default function Bulut() {
  return (
    <div className="flex">
      <div
        className="mt-[400px]"
        style={{
          backgroundImage: "url('/bulutl.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "740px",
          height: "780px",
        }}
      ></div>
      <div
        className="mt-[400px]"
        style={{
          backgroundImage: "url('/bulutr.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "740px",
          height: "780px",
        }}
      ></div>
    </div>
  );
}
