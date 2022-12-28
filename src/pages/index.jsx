import Tagline from "../components/Tagline/index";
import HeroText from "../components/HeroText";
import Seo from "../components/Seo/index";
import { Container } from "../components/ui-library";
import TransitionUp from "../components/animations/TransitionUp";

const Home = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Software engineer and recent bootcamp graduate with a growth, failure, 
        and evolving mindset, dedicated to continuous learning and problem-solving. Explore 
        my portfolio to see my skills and experiences in software development."
      />
      <TransitionUp>
        <Container size="small">
          <HeroText />
          <Tagline />
        </Container>
      </TransitionUp>
    </>
  );
};

export default Home;
