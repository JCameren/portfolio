import Image from "next/image";
import { Container, Spacer } from "../ui-library/index";
import * as styles from "./index.css";

const ProjectDetailBanner = ({ image }) => {
  return (
    <Container size="medium">
      <div className={styles.bannerImgWrapper}>
        {/* this handler class was a godsend https://www.youtube.com/watch?v=P7i5YIJRJew */}
        <Image src={image.url} alt="project image" className={styles.imageResHandler} fill />
      </div>
      <Spacer size="md" />
    </Container>
  );
};

export default ProjectDetailBanner;
