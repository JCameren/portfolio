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
  const orderPostByDate = [...posts].map((post) => {
    return { ...post, date: new Date(post.date) };
  });

  const sortedPosts = [...orderPostByDate].sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  const formattedDate = (dateStr) => {
    return new Date(dateStr).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Container size="small">
        <SmallText>PROJECTS</SmallText>
      </Container>
      <Spacer size="sm" />
      <Container size="medium">
        <Grid>
          {sortedPosts.map(({ id, title, description, slug, date }) => (
            <Link href={`/projects/${slug}`} key={id}>
              <Card variant="outlined">
                <Flex variant="spaceBetween">
                  <Text>
                    <BsCalendar4 />
                  </Text>
                  <div suppressHydrationWarning>
                    <Text>{formattedDate(date)}</Text>
                  </div>
                </Flex>
                <Spacer size="md" />
                <Heading>{title}</Heading>
                <Spacer size="xs" />
                <SmallText>{description}</SmallText>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectGrid;
