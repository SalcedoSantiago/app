import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header id="main-header">
            <div className="content container">
                <Link to="/">
                    <div className="logo">
                        <h2>E-commerce</h2>
                    </div>
                </Link>
                <nav className="navigation ">
                    <ul className="nav-links">
                        <Link to="/">
                            <li className="nav-link">Home</li>
                        </Link>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Store</li>
                        <li className="nav-link">Contact</li>
                    </ul>
                </nav>
                <div className="header-cart">
                    <Link to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256" className="shoingCart"><rect width="256" height="256" fill="none"></rect><path d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="80" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
                    </Link>
                </div>
            </div>
        </header>

    )

}

export default Navbar;