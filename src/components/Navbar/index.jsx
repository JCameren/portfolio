import Link from "next/link";
import { Button, Container, Flex, Spacer, Heading, Text } from "../ui-library";
import Overlay from "../Overlay";
import { AiOutlineMenu } from "react-icons/ai";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import * as styles from "./index.css";

const Navbar = () => {
  const [sideNavActive, setSideNavActive] = useState(false);
  const toggleNavState = () => {
    setSideNavActive((prevState) => !prevState);
  };
  const makeNavStateFalse = () => {
    if (sideNavActive) {
      toggleNavState();
    } else return;
  };
  return (
    <>
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <Link href={"/"} onClick={makeNavStateFalse}>
              Logo
            </Link>
            <button className={styles.navBtnWrapper} onClick={toggleNavState}>
            <AiOutlineMenu />
            </button>
          </Flex>
        </Container>
      </header>
      {sideNavActive && (
        <>
          <Overlay toggleNavState={toggleNavState} />
          <div className={styles.sideMenu}>
            <header className={styles.sideMenuHeader}>
              <Flex variant="spaceBetween">
                <Heading>Navigate</Heading>
                <TfiClose
                  className={styles.sideNavBtnWrapper}
                  onClick={toggleNavState}
                />
              </Flex>
            </header>
            <section className={styles.sideMenuLinks}>
              <Link href={"/"} onClick={toggleNavState}>
                <Text>Home</Text>
              </Link>
              <Spacer size="sm" />
              <Link href={"/projects"} onClick={toggleNavState}>
                <Text>Projects</Text>
              </Link>
              <Spacer size="sm" />
              <Button variant="wide">Resume</Button>
              <Spacer size="sm" />
              <Button
                variant="wide"
                as="a"
                href="https://www.github.com/JCameren"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <SiGithub />
                Github
              </Button>
              <Spacer size="sm" />
              <Button
                variant="wide"
                href="https://www.linkedin.com/in/camerenj/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <SiLinkedin />
                LinkedIn
              </Button>
            </section>
          </div>
        </>
      )}
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
