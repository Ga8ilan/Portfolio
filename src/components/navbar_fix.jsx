import E from '../assets/ecnew.png'

function NavBar() {
    return (
        <nav className="navbar">
            {/* Navbar code */}
            <div className="nav-container">
                <a href="#about" className="brand" aria-label="Go to About section">
                    <img src={E} alt="Edgar Logo" className="logo" />
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar