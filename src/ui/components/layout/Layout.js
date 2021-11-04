import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {


  console.log('children', children);

  return (
    <>
      <Navbar />
      <div className="container main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
