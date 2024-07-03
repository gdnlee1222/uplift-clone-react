import logo from "../assets/uplift-nav.webp";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="navbar-logo">
                    <img src={logo} alt="uplift-logo" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
