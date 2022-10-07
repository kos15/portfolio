import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 z-20 flex justify-between items-start max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-row">
          <SocialIcon
            bgColor="transparent"
            fgColor="grey"
            url="https://www.linkedin.com/in/kos91"
          ></SocialIcon>
          <SocialIcon
            bgColor="transparent"
            fgColor="grey"
            url="https://github.com/kos15"
          ></SocialIcon>
          <SocialIcon
            bgColor="transparent"
            fgColor="grey"
            url="https://twitter.com/koustubh_mishra"
          ></SocialIcon>
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-row justify-center items-center cursor-pointer">
          <SocialIcon
            fgColor="grey"
            bgColor="transparent"
            network="email"
          ></SocialIcon>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}
