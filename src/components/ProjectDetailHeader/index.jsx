import {
  Container,
  Flex,
  BannerText,
  Spacer,
  Button,
} from "../ui-library/index";
import * as styles from './index.css'

const ProjectDetailHeader = ({ title }) => {
  return (
    <>
      <Container size="large" as="header">
        <Flex variant="center">
          <BannerText className={styles.projectHeaderWrapper}>{title}</BannerText>
        </Flex>
      </Container>
      <Spacer size="md" />
    </>
  );
};

export default ProjectDetailHeader;
