import Image from "next/legacy/image";
import { Container, Flex, Spacer } from "../ui-library/index";
import * as styles from "./index.css";

const ProjectDetailBanner = ({ image }) => {
  return (
    <Container size="medium">
      <Flex variant="center">
        <div className={styles.bannerImgWrapper}>
          {/* this handler class was a godsend https://www.youtube.com/watch?v=P7i5YIJRJew */}
          <Image
            src={image.url}
            alt="project image"
            className={styles.imageResHandler}
            width={895}
            height={440}
            layout="intrinsic"
          />
        </div>
      </Flex>
      <Spacer size="md" />
    </Container>
  );
};

export default ProjectDetailBanner;
