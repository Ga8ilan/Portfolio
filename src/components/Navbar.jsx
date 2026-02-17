import E from '../assets/E.png'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src={E} axlt="Edgar Logo" className="logo">
                    </img>
                </div>
                <ul className="nan-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar