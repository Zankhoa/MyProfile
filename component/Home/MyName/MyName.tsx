import React from "react";
import { motion } from "framer-motion";

interface MyNameProps {
  finishedLoading: boolean;
}
const MyName: React.FC<MyNameProps> = (props) => {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 relative" // Added relative for potential scroll indicator
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 4.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 4.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 4.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 4.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Phạm Văn Khoa
      </motion.h1>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 4.9,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 4.9,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a{" "}
        <span className="text-AAsecondary keyword-hover">
          .NET Software Engineer
        </span>{" "}
        with over{" "}
        <span className="text-AAsecondary keyword-hover">
          1.5 years of practical experience
        </span>{" "}
        in building efficient and scalable web applications.
        <br className="3xl:block hidden" /> I specialize in{" "}
        <span className="text-AAsecondary keyword-hover">.NET Development</span>{" "}
        and have strong skills in both{" "}
        <span className="text-AAsecondary keyword-hover">front-end</span> and{" "}
        <span className="text-AAsecondary keyword-hover">
          back-end development
        </span>
        .
        <br className="3xl:block hidden" /> My technical expertise includes{" "}
        <span className="text-AAsecondary keyword-hover">
          C#, .NET Core, ASP.NET, Java, SQL Server, MySQL, React.js, Next.js,
          HTML, CSS,
        </span>{" "}
        and <span className="text-AAsecondary keyword-hover">JavaScript</span>.
        <br className="3xl:block hidden" /> I’m passionate about developing{" "}
        <span className="text-AAsecondary keyword-hover">
          user-centered features
        </span>{" "}
        and delivering{" "}
        <span className="text-AAsecondary keyword-hover">
          high-quality solutions
        </span>{" "}
        that enhance user experiences and drive innovation.
        <br className="3xl:block hidden" /> My adaptability and collaborative
        mindset enable me to thrive in{" "}
        <span className="text-AAsecondary keyword-hover">
          diverse working environments
        </span>{" "}
        and contribute effectively to team success.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover">
             My CV
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default MyName;
