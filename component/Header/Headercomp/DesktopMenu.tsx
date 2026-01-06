import React from 'react'
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
export default function DesktopMenu(props: {finishedLoading: boolean }){
    return (
<div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ml-auto">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 5,
          delay: props.finishedLoading ? 0 : 5,
        }}
        className=" text-AAsecondary"
       
      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
           01. <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">About me</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 5,
          delay: props.finishedLoading ? 0 : 5,
        }}
        className="text-AAsecondary"
       
      >
        <ReactScrollLink to="MyExperienceSection" spy={true} smooth={true} offset={-300} duration={200}>
         02.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">My experience</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 5,
          delay: props.finishedLoading ? 0 : 5,
        }}
        className="text-AAsecondary"
      >
        {/* <ReactScrollLink to="SomethingIveBuiltSection" spy={true} smooth={true} offset={-100} duration={200}>
         03. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Work</span>
        </ReactScrollLink> */}
        
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 5,
          delay: props.finishedLoading ? 0 : 5,
        }}
        className="text-AAsecondary"
      >
         {/* <ReactScrollLink to="GetInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
          0. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Contact</span>
        </ReactScrollLink> */}
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 5,
          delay: props.finishedLoading ? 0 : 5,
        }}
        className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        My CV
      </motion.button>
      </a>
    </div>
  );
}
