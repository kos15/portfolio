import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  const img = [
    "https://img.icons8.com/color/344/html-5--v2.png",
    "https://img.icons8.com/color/344/css3.png",
    "https://img.icons8.com/color/344/angularjs.png",
    "https://img.icons8.com/color/344/redux.png",
    "https://img.icons8.com/color/344/jenkins.png",
    "https://img.icons8.com/color/344/docker.png",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 xl:top-24 uppercase text-2xl tracking-[20px] text-gray-500">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory p-10">
        <ExperienceCard
          imgSrc="tcs.jpeg"
          descHeading="Frontend Developer"
          descCompanyName="TCS"
          descDate="August 2020 - present"
          descSkillsTag={img}
        ></ExperienceCard>
        <ExperienceCard
          imgSrc="tcs.jpeg"
          descHeading="Frontend Developer"
          descCompanyName="TCS"
          descDate="August 2020 - present"
          descSkillsTag={img}
        ></ExperienceCard>
      </div>
    </motion.div>
  );
}
