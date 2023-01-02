import Link from "next/link";
import { Button, Container, Flex, Spacer } from "../ui-library";
import * as styles from "./index.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <Link href={"/"}>
              cj
            </Link>
            <Button variant="filled">Resume</Button>
          </Flex>
        </Container>
      </header>
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
