import './style.css'
import logo from '../images/favicon-32x32.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <a href="#"><img src={logo} alt="logo" /></a>
            <div class="footer--contents">
                
                <ul class="socials" id="socials">
                    <li><a href="https://www.facebook.com/" target="_blank"> <FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                    <li><a href="https://www.twitter.com/" target="_blank"> <FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"> <FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
                </ul>
            </div>
            <a href="#">TECH GIANTS</a>
        </footer>
    );
};


export default Footer;