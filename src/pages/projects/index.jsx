import { hygraph, POSTS_REQUEST, PATHS_REQUEST } from "../../utilities/hygraph-api";
import Seo from "../../components/Seo";
import ProjectGrid from '../../components/ProjectGrid/index'
import ProjectPageIntro from "../../components/ProjectPageIntro";
import { Container, BannerText } from "../../components/ui-library";

const Projects = ({ posts }) => {
  return (
    <>
      <Seo
        title="Projects"
        description="Explore a selection of Cameren's most recent and 
        notable projects on the projects page of his portfolio website. 
        Learn about the technologies and techniques used, any notable achievements 
        or milestones, and relevant links and resources for each project."
      />
      <Container size="small">
        <BannerText>Projects</BannerText>
        <ProjectPageIntro />
      </Container>
      <ProjectGrid posts={posts} />
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const { posts } = await hygraph.request(POSTS_REQUEST)
  return {
    props: {
      posts
    }
  }
}