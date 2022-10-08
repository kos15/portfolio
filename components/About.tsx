import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="me.jpg"
        className="-mb-20 md:mb-0 flex-shrink object-cover rounded-full h-56 w-56
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semi-bold">
          Here&apos;s a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I&apos;am Koustubh. 💯 You might also know me as KOS! here&apos;s a little bit
          about me... I have been coding for over 2 years now. I have a corprate
          Experience of working as a Frontend DEV. During this period I have
          work across many framework ,such as Angular, React, Next. Apart from
          this I have also done{" "}
          <span className="underline decoration-[#F7AB0A]">POC&apos;s</span>{" "}on Micro-Frontend.
          I&apos;m also familar with the Backend Frameworks like SpringBoot, NodeJS.
          Apart from this I love to travel ,explore myself ...make new friends
        </p>
      </div>
    </motion.div>
  );
}
