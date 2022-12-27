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
      <Container size="large" as="footer">
        <Grid>
          <Card>
            <Heading>
              Thanks for stopping by! If you have any questions or want to chat
              about potential opportunities, don't be a stranger - shoot me a
              message.
            </Heading>
          </Card>
          <Card>
            <Flex variant="flexEnd">
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
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
