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
  Button,
} from "../ui-library/index.js";

const ProjectGrid = ({ posts }) => {
  const orderPostByDate = [...posts].map((post) => {
    return { ...post, date: post.date };
  });

  const sortedPosts = [...orderPostByDate].sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  return (
    <>
      <Container size="small">
        <SmallText>PROJECTS</SmallText>
      </Container>
      <Spacer size="sm" />
      <Container size="medium">
        <Grid>
          {sortedPosts.map(
            ({ id, title, description, slug, date, githubUrl, demoUrl }) => (
              // <Link href={`/projects/${slug}`} key={id}>
              <Card variant="outlined" key={id}>
                <Flex variant="spaceBetween">
                  <Text>
                    <BsCalendar4 />
                  </Text>
                  <div suppressHydrationWarning>
                    <Text>{date}</Text>
                  </div>
                </Flex>
                <Spacer size="md" />
                <Heading>{title}</Heading>
                <Spacer size="xs" />
                <SmallText>{description}</SmallText>
                <Spacer size="xs" />
                <Flex variant="spaceBetween">
                  <Button
                    variant="filled"
                    as="a"
                    href={githubUrl}
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button as="a" href={demoUrl} target="_blank">
                    Demo
                  </Button>
                </Flex>
              </Card>
              // </Link>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectGrid;
