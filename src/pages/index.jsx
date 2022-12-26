import Tagline from '../components/Tagline/index'
import TechStack from '../components/TechStack/index';
import ToolStack from '../components/ToolStack';
import HeroText from '../components/HeroText';
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
      <Container size="small">
        <HeroText />
        <Tagline />
        <TechStack />
        {/* <ToolStack /> */}
      </Container>
    </>
  );
}

export default Home