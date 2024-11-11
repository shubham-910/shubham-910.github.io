import { certificateList } from "../constants";
import { motion } from "framer-motion";
import { layout } from "../style";

const FeatureCard = ({ title, link, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === certificateList.length - 1 ? "mb-0" : "mb-6"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h4>
    </div>
  </div>
);

const Certificate = () => {
  return (
    <section id="certificateList" className="mt-10">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Certificates
      </h1>
      <motion.div
        className={layout.sectionReverse}
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={`${layout.sectionInfo} flex-col`}>
          {certificateList.map((certificate, index) => (
            <FeatureCard key={certificate.id} index={index} {...certificate} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificate;
