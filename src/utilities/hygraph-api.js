import { GraphQLClient, gql } from "graphql-request";

export const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

export const POSTS_REQUEST = gql`
  {
    posts {
      date
      description
      id
      slug
      title
      image {
        url
      }
    }
  }
`;

export const PATHS_REQUEST = gql`
query Post($slug : String!) {
        post(where: { slug: $slug }) {
            image {
              url
            }
            publishedAt
            richText {
              html
            }
            title
            slug
          }
}
`;

export const SLUG_REQUEST = gql`
    {
        posts {
            slug
        }
    }
`