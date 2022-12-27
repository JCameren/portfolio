import {
  Container,
  Spacer,
  Grid,
  Flex,
  Heading,
  SmallText,
  Card,
  Text,
} from "../ui-library";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Spacer size="lg" />
      <Container size="large" as="footer" space={null}>
        <Flex variant="spaceBetween">
            <SmallText>
            &copy; 20222 Cameren Johnson
            </SmallText>
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
    </>
  );
};

export default Footer;
