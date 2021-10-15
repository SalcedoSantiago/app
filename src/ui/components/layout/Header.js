import Nav from "./Nav";

const Header = () => {

    return (
        <header id="main-header">
            <div className="content">
                <div className="logo">
                    <img src="" alt="logo" />
                </div>
                <div className="header-nav">
                    <Nav />
                </div>
                <div className="header-cart">
                    <button>Cart</button>
                </div>
            </div>
        </header>
    )

}

export default Header;