import atmaLogo from '../assets/atma.png';

export default function Navbar() {
    return (
        <nav id="navbar">
            <img src={atmaLogo} id='atma-logo' alt="Logo atma"/>
            <ul>
                <li><a href="#welcome-section">About Me</a></li>
                <li><a href="#projects">Past Projects</a></li>
                <li><a href="#contact-me-section">Contact Me</a></li>
            </ul>
        </nav>
    )
}