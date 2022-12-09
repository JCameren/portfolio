import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

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
