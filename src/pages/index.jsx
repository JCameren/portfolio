import { AnimatePresence, motion } from "framer-motion";
import Tagline from "../components/Tagline/index";
import TechStack from "../components/TechStack/index";
import HeroText from "../components/HeroText";
import Seo from "../components/Seo/index";
import { Container } from "../components/ui-library";

const Home = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Software engineer and recent bootcamp graduate with a growth, failure, 
        and evolving mindset, dedicated to continuous learning and problem-solving. Explore 
        my portfolio to see my skills and experiences in software development."
      />
      <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ delay: 1, ease: "easeInOut", duration: 1.25 }}
        >
          <Container size="small">
            <HeroText />
            <Tagline />
            <TechStack />
          </Container>
        </motion.section>
    </>
  );
};

export default Home;
