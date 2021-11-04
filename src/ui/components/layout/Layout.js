import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

  alert(children)
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
