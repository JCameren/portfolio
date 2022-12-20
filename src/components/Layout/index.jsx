import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

const Layout = ({ children, themeToggle }) => {
  return (
    <>
      <Navbar themeToggle={themeToggle}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
