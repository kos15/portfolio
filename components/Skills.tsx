import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
    const img = [
        "https://img.icons8.com/color/344/html-5--v2.png",
        "https://img.icons8.com/color/344/css3.png",
        "https://img.icons8.com/color/344/angularjs.png",
        "https://img.icons8.com/color/344/redux.png",
        "https://img.icons8.com/color/344/jenkins.png",
        "https://img.icons8.com/color/344/docker.png",
      ];

    let skill:any = []
    img.forEach((element, index) => {
        skill.push(
            <Skill img={element} directionLeft={index/4 ? false : true}/>
        )
    });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3 className="absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skill}
      </div>
    </motion.div>
  );
}
