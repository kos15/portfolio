import React from "react";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
      <h3 className="absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
            I have got just what you need{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
                Let&apos;s talk
            </span>
        </h4>
      </div>
    </div>
  );
}
