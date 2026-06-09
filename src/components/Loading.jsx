import { motion } from "framer-motion";
import { shubham } from "../assets";

const Loading = () => (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="relative flex flex-col items-center gap-6">
      <div className="relative">
        <div className="loading-ring absolute inset-0 rounded-2xl border-2 border-accent/30" />
        <img
          src={shubham}
          alt="Loading"
          className="relative w-16 h-16 rounded-2xl object-cover ring-2 ring-border"
        />
      </div>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-accent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Loading;
