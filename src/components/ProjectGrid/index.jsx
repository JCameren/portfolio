import Link from "next/link";
import { Container, Grid, Card, Heading, Text } from "../ui-library";

const ProjectGrid = ({ posts }) => {
  // const { date, description, id, slug, title, richText, image } = posts;
  return (
    <Container size="large">
      <Grid>
        {posts.map(({ id, title, description, slug }) => (
          <Link href={`/projects/${slug}`}>
            <Card variant="outlined" key={id}>
              <Heading>{title}</Heading>
              <Text>{description}</Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectGrid;
