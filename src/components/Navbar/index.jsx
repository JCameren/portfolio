import Link from "next/link";
import {
  Button,
  Container,
  Flex,
  Spacer,
  Heading,
  Card,
  Text,
} from "../ui-library";
import Overlay from "../Overlay";
import { AiOutlineMenu } from "react-icons/ai";
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
      toggleNavState()
    } else return
  }
  return (
    <>
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <ul>
              <Link href={"/"} onClick={makeNavStateFalse}>
                Logo
              </Link>
            </ul>
            <ul>
              <AiOutlineMenu
                className={styles.sideNavBtnWrapper}
                onClick={toggleNavState}
              />
            </ul>
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
                <Text>projects</Text>
              </Link>
              <Spacer size="sm" />
              <Button>Resume</Button>
            </section>
          </div>
        </>
      )}
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
