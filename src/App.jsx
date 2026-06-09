import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  OpenSource,
  Projects,
  Loading,
  Certificate,
} from "./components";
import BackgroundEffects from "./components/BackgroundEffects";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundEffects />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />

            <main className={`${styles.paddingX} pt-[72px]`}>
              <div className={styles.boxWidth}>
                <Hero />

                <div className="section-divider my-4" />

                <SkillsAndExperience />

                <div className="section-divider my-4" />

                <Education />

                <div className="section-divider my-4" />

                <Projects />

                <div className="section-divider my-4" />

                <Certificate />

                <div className="section-divider my-4" />

                <OpenSource />
              </div>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
