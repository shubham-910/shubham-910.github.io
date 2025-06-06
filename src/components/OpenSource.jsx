import React from "react";
import { DiGitMerge } from "react-icons/di";
import { motion } from "framer-motion";
import { aesterik } from "../assets";

const OpenSource = () => {
  return (
    <section id="openSource">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Open Source Contributions
      </h1>

      <div className="container px-2 py-5 mx-auto mb-8">
        <div className="grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 md:grid-cols-3 sm:grid-cols-2">
          <motion.div
            className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
            whileInView={{ x: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-row">
              <img
                src={aesterik} // Replace with actual logo URL
                alt="Your Organization"
                className="w-[30px] h-[30px] rounded-full mt-2"
              />
              <div className="flex flex-col ml-4">
                <a
                  className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px] hover:text-teal-200"
                  href="https://github.com/users/shubham-910/achievements/pull-shark" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  asterisk-java
                </a>
                <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
                  
                </p>
              </div>
            </div>

            {/* <div className="flex flex-row justify-around ml-2 mt-4">
              <a
                className="font-poppins font-normal text-[12px] text-dimWhite inline"
                href="https://github.com/YourOrg/YourRepo" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGitMerge size="1.5rem" className="text-violet-700 inline" />
                #123
              </a>
              <p className="font-poppins font-normal text-[14px]">
                <span className="text-green-600">+150 </span>
                <span className="text-red-700">-20</span>
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
