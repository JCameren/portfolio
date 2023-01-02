import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import { darkTheme } from "../../styles/theme.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
