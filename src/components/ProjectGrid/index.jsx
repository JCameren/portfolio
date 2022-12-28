import Link from "next/link";
import { BsCalendar4 } from 'react-icons/bs'
import { Container, Grid, Card, Heading, Text, Spacer, Flex } from "../ui-library";

const ProjectGrid = ({ posts }) => {
  return (
    <Container size="large">
      <Grid>
        {posts.map(({ id, title, description, slug, date }) => (
          <Link href={`/projects/${slug}`} key={id}>
            <Card variant="outlined">
              <Flex variant="spaceBetween">
              <Text>
                <BsCalendar4 />
              </Text>
              <Text>{date}</Text>
              </Flex>
              <Spacer size="md" />
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
