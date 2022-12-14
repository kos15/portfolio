import { motion } from "framer-motion";
import React from "react";
import { SiAngular } from "react-icons/si";

type Props = { imgSrc: string, 
descHeading: string,
descCompanyName: string,
descDate: string,
descSkillsTag: string[],
};

export default function ExperienceCard({ imgSrc, descHeading, descCompanyName, descDate, descSkillsTag }: Props) {

const skills:any = [];
descSkillsTag.forEach(element => {
    skills.push(<img src={element} alt="" className="h-10 w-10 rounded-full"/>)
});

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{once: true}}
        src={imgSrc}
        alt=""
        className="h-32 w-32 rounded-full object-fill object-center xl:h-[200px] xl:w-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{descHeading}</h4>
        <p className="font-bold text-2xl mt-1">{descCompanyName}</p>
        <div className="flex space-x-2 my-2">
            {skills}
        </div>
        <p className="uppercase py-5 text-gray-500">{descDate}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
      </div>
    </article>
  );

}
