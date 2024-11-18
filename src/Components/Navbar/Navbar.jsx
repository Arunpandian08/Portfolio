import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './navbar.css';
import logo from '../../assets/Images/NavbarIcons/logo.png';
import menuIcon from '../../assets/Images/NavbarIcons/menuIcon.png';
import menuCloseIcon from '../../assets/Images/NavbarIcons/close.png';

const Navbar = ({ isOpen, setIsOpen, lenis }) => {
    const [activeLink, setActiveLink] = useState('profile-section');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = useMemo(() => [
        { id: 'profile-section', name: 'Profile', offset: 0 },
        { id: 'skills-section', name: 'Skills', offset: 0 },
        { id: 'project-section', name: 'Projects', offset: -60 },
        { id: 'education-section', name: 'Education', offset: -60 },
        { id: 'contact-section', name: 'Contact', offset: -60 },
    ], []);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + 80;
        const profileSection = document.getElementById('profile-section');

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(item.id);
                }
            }
        });

        if (profileSection) {
            const profileSectionHeight = profileSection.clientHeight;
            const scrollThreshold = profileSectionHeight * 0.1;
            
            setIsScrolled(window.scrollY >= scrollThreshold);
        }
    }, [navItems]);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleToggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [setIsOpen]);

    const handleLinkClick = useCallback((id, offset) => {
        setIsOpen(false);
        if (lenis) {
            lenis.scrollTo(`#${id}`, {
                offset: offset,
                duration: 2,
                easing: (t) => Math.sin((t * Math.PI) / 2),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });
        }
    }, [lenis, setIsOpen]);

    const renderNavItems = useCallback((isMobile = false) => (
        <ul className="nav-links">
            {navItems.map((item) => (
                <li key={item.id} className={`nav-items ${activeLink === item.id ? 'active' : ''}`}>
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.id, item.offset);
                        }}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    ), [navItems, activeLink, handleLinkClick]);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <nav>
                <div className="nav-brand">
                    <a href="/">
                        <img src={logo} width='120px' height='60px' alt="logo" />
                    </a>
                </div>
                {renderNavItems()}
                <div className="action-btn" onClick={handleToggleMenu} aria-expanded={isOpen} aria-controls="dropdown_menu">
                    {isOpen ? <img className='closeIcon' src={menuCloseIcon} width='50px' height='50px' alt="close-menu-icon" />
                        : <img src={menuIcon} width='50px' height='45px' alt="open-menu-icon" />}
                </div>
            </nav>
            <div className={`dropdown_menu ${isOpen ? 'open' : ''}`} id="dropdown_menu">
                {renderNavItems(true)}
            </div>
        </header>
    );
};

export default React.memo(Navbar);