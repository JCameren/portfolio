import { Container, Spacer, Text } from "../ui-library/index";
import * as styles from "./index.css";

const ProjectDetailContent = ({ richText }) => {
  return (
    <>
      <Spacer size="sm" />
      <Container size="small">
        <div className={styles.contentWrapper}>
          <Text dangerouslySetInnerHTML={{ __html: richText.html }} />
        </div>
      </Container>
    </>
  );
};

export default ProjectDetailContent;
