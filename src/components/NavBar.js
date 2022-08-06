import './style.css'
import logo from '../images/favicon-32x32.png'

function NavBar() {
    return (
        <header>
            <a href="/" className="logo"><img src={logo} alt="Logo"/>TECH GIANTS</a>
            <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/">Customers</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/cart">Shop</a></li>
            </ul>
        </header>
    );
};

export default NavBar;