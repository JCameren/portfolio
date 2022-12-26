import {
  hygraph,
  PATHS_REQUEST,
  SLUG_REQUEST,
} from "../../utilities/hygraph-api";
import Seo from "../../components/Seo";
import ProjectDetailBanner from "../../components/ProjectDetailBanner";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailHeader from "../../components/ProjectDetailHeader";

const ProjectDetails = ({ post }) => {
  const { title, image, richText, description } = post;
  return (
    <>
      <Seo title={title} description={description} />
      <ProjectDetailHeader title={title} />
      <ProjectDetailBanner image={image} />
      <ProjectDetailContent richText={richText} />
    </>
  );
};

export default ProjectDetails;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(PATHS_REQUEST, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUG_REQUEST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}
