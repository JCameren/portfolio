import { Container, Spacer, Flex, SmallText, Card } from "../ui-library";
import * as styles from "./index.css";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Spacer size="lg" />
      <footer className={styles.footerWrapper}>
        <Container size="large" as="div">
          <Flex variant="spaceBetween">
            <SmallText>&copy; 2022 Cameren Johnson</SmallText>
            <Card>
              <Flex>
                <a
                  href="https://github.com/JCameren"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <SmallText>
                    <SiGithub />
                  </SmallText>
                </a>
                <Spacer size="sm" />
                <a
                  href="https://www.linkedin.com/in/camerenj/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <SmallText>
                    <SiLinkedin />
                  </SmallText>
                </a>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
