import * as hygraphAPI from '../utilities/hygraph-api'
import Tagline from "../components/Tagline/index";
import Projects from "../components/Projects";
import HeroText from "../components/HeroText";
import Seo from "../components/Seo/index";
import { Container } from "../components/ui-library";
import TransitionUp from "../components/animations/TransitionUp";

const Home = ({ posts }) => {
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
        <Projects posts={posts} />
      </TransitionUp>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = await hygraphAPI.hygraph.request(hygraphAPI.POSTS_REQUEST)
  return {
    props: {
      posts,
    }
  }
}