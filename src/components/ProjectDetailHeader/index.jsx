import {
  Container,
  Flex,
  BannerText,
  Spacer,
  Button,
  Heading,
} from "../ui-library/index";
import * as styles from './index.css'

const ProjectDetailHeader = ({ title }) => {
  return (
    <>
      <Container size="large" as="header">
        <Flex variant="center">
          <Heading className={styles.projectHeaderWrapper}>{title}</Heading>
        </Flex>
      </Container>
      <Spacer size="md" />
    </>
  );
};

export default ProjectDetailHeader;
