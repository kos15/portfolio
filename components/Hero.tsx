import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Koustubh Mishra",
      "<Mad-for-web-dev.com>",
      "<Guy-who-loves-coffee.ts>",
      "<Loves-to-code.js>",
      "Developer",
      "Designer",
      "Creator",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="me.jpg"
        className="realtive rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">
          software eingineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7ABBA"></Cursor>
        </h1>

        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
          <Link href='#contactUs'>
            <button className="heroButton">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
