import { hygraph, PATHS_REQUEST, SLUG_REQUEST } from "../../utilities/hygraph-api"

const ProjectDetails = ({ post }) => {
  const { title } = post
  return (
    <div>{title}</div>
  )
}

export default ProjectDetails

export async function getStaticProps({ params }) {
  const slug = params.slug
  const data = await hygraph.request(PATHS_REQUEST, { slug })
  const post = data.post
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUG_REQUEST)

  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: "blocking"
  }
}