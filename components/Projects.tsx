import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects: any = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" h-screen relative overflow-hidden flex flex-col justify-evenly items-center max-w-full text-left md:flex-row mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project: any, index: number) => {
          return (
            <div key={`${project}+${index}`} className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen">
              <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{once: true}}
              transition={{ duration: 1.2 }}
                src="https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636__480.png"
                alt=""
             className="bg-transparent"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50 pt-3">
                    Case Study {index + 1} of {projects.length}
                  </span>
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  unde dignissimos! Aperiam reprehenderit nulla reiciendis
                  numquam ipsam nihil aliquam, sapiente neque quas nemo libero?
                  Repellendus odio quae enim mollitia laudantium.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
