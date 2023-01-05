import Link from "next/link";
import { BsCalendar4 } from "react-icons/bs";
import {
  Container,
  Grid,
  Card,
  Heading,
  Text,
  Spacer,
  Flex,
  SmallText,
} from "../ui-library/index.js";

const ProjectGrid = ({ posts }) => {
  return (
    <>
      <Container size="small">
        <SmallText>PROJECTS</SmallText>
      </Container>
      <Spacer size="sm" />
      <Container size="medium">
        <Grid>
          {posts.map(({ id, title, description, slug, date }) => (
            <Link href={`/projects/${slug}`} key={id}>
              <Card variant="outlined">
                <Flex variant="spaceBetween">
                  <Text>
                    <BsCalendar4 />
                  </Text>
                  <Text>{new Date(date).toLocaleString('en-US', {day:'numeric', month: 'long', year:'numeric'})}</Text>
                </Flex>
                <Spacer size="md" />
                <Heading>{title}</Heading>
                <Text>{description}</Text>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectGrid;
