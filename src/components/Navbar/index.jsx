import Link from "next/link";
import Image from "next/image.js";
import { Container, Flex, SmallText, Spacer } from "../ui-library/index.js";
import * as styles from "./index.css";

const Navbar = () => {
  return (
    <>
    <Spacer size="sm" />
      <header className={styles.desktopNavWrapper}>
        <Container as="div" size="large">
          <Flex variant="spaceBetween">
            <Link href={"/"}>
              <Image src='/logo.svg' alt="website logo"  width={20}  height={20} />
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
