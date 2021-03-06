import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div className="container main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
