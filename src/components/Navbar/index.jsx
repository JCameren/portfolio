import Link from "next/link";
import { Button, Container, Flex, SmallText, Spacer } from "../ui-library/index.js";
import * as styles from "./index.css";

const Navbar = () => {
  return (
    <>
    <Spacer size="sm" />
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <Link href={"/"}>
              <img src='/logo.svg' alt="website logo"  width="20px"/>
            </Link>
            <SmallText>v1.0</SmallText>
          </Flex>
        </Container>
      </header>
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
