import * as styles from "./index.css";
import { Button, Container, Flex, Spacer } from "../ui-library";
import { NavLink } from "./nav-ui";
import { useState } from "react";

const Navbar = ({ themeToggle }) => {
  const [activeTab, setActiveTab] = useState("HOME");

  const setHomeActive = () => {
    setActiveTab("HOME");
  };
  const setblogActive = () => {
    setActiveTab("BLOG");
  };
  return (
    <>
      <header className={styles.desktopNavWrapper}>
        {/* <Button onClick={themeToggle}>Change Theme</Button> */}
        <Container as="div" size="medium">
          <Flex variant="spaceBetween">
            <ul>
              <NavLink href={"/"} onClick={setHomeActive}>
                Logo
              </NavLink>
            </ul>
            <ul>
              <NavLink
                href={"/"}
                className={
                  activeTab === "HOME"
                    ? styles.navLinkVariants.active
                    : styles.navLinkVariants.nonActive
                }
                onClick={setHomeActive}
              >
                home
              </NavLink>
              <NavLink
                href={"/"}
                className={
                  activeTab === "BLOG"
                    ? styles.navLinkVariants.active
                    : styles.navLinkVariants.nonActive
                }
                onClick={setblogActive}
              >
                blog
              </NavLink>
            </ul>
          </Flex>
        </Container>
      </header>
      <Spacer size="lg" />
    </>
  );
};

export default Navbar;
