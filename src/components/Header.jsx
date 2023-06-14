import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.scss'
const Header = () => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <div className='navigation'>
                <div className="logo">React_WebSite</div>
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <ul className={click ? "nav active" : "nav"}>
                        <li onClick={closeMobileMenu}>
                            <i class="fa-solid fa-house"></i>
                            <Link to='/' className='link'> Home</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <i class="fa-solid fa-circle-info"></i>
                            <Link to='/about' className='link'> About</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <i class="fa-solid fa-server"></i>
                            <Link to='/services' className='link'> Services</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <i class="fa-solid fa-address-book"></i>
                            <Link to='/contact' className='link'> Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
            <Outlet />
        </>


    );
};

export default Header;