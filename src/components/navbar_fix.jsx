import E from '../assets/E.png'

function NavBar() {
    return (
        <nav className="navbar">
            {/* Navbar code */}
            <div className="nav-container">
                <ul className="nan-links">
                    <li>
                        <a href="#about">About
                            <img src={E} alt="Edgar Logo" className="logo" />
                        </a>
                    </li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar