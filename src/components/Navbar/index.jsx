import Link from "next/link";
import * as styles from "./index.css";
import { Button, Container, Flex, Spacer } from "../ui-library";

const Navbar = () => {
  return (
    <>
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <ul>
              <Link href={"/"}>Logo</Link>
            </ul>
            <ul>
              <Button>
                Resume
              </Button>
            </ul>
          </Flex>
        </Container>
      </header>
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
