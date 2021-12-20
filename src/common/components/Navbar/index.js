import React, { useState, useEffect } from 'react';
import { withRouter, NavLink } from "react-router-dom";
import logo from '../../assets/images/Navbar/logo.png';
import './style.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import resume from "../../assets/documents/Chad.Liu_CV.pdf"
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faAlignRight, faUser, faFolderOpen, faToolbox, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { debounce } from "utilities/helper";



export const Navbar = () => {
    let preScrollPos = 0;
    const [visibleNavbar, setVisibleNavbar] = useState(true);
    const [expand, setExpand] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (preScrollPos > currentScrollPos && (preScrollPos - currentScrollPos) > 5 || currentScrollPos <= 30) {
            setVisibleNavbar(true)
        }
        if (preScrollPos < currentScrollPos && (currentScrollPos - preScrollPos) > 5) {
            setVisibleNavbar(false)
        }
        if (preScrollPos == currentScrollPos) {
            setTimeout(() => {
                setVisibleNavbar(false)
            }, 1000);
        }
        preScrollPos = currentScrollPos
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const List = () => (
        <ul>
            {/* <li><img src={logo} alt="logo missing" /></li> */}
            <li><NavLink to="/" activeClassName="active" exact >
                <FontAwesomeIcon size="0.5x" icon={faUser} /><span>Home</span>
            </NavLink></li>
            <li><NavLink to="/portfolio">
                <FontAwesomeIcon size="0.5x" icon={faFolderOpen} /><span>Portfolio</span>
            </NavLink></li>
            <li><NavLink to={resume} target="_blank" >
                <FontAwesomeIcon size="0.5x" icon={faToolbox} /><span>Resume</span>
            </NavLink></li>
            <li><NavLink to="/contact-me" >
                <FontAwesomeIcon size="0.5x" icon={faEnvelope} /><span>Contact Me</span>
            </NavLink></li>
        </ul>
    )

    return (
        <Fragment>
            <header className={visibleNavbar ? "navbar" : "navbar hide"}>
                <nav>
                    <List />
                </nav>
            </header>
            <header className={expand ? "miniNav expand" : "miniNav"}>
                <nav>
                    <div className="miniNav__round__first">
                        <FontAwesomeIcon
                            size='sm'
                            icon={expand ? faAlignRight : faAlignJustify}
                            onClick={() => setExpand(!expand)}
                        />
                    </div>
                    <div className="miniNav__round__second"></div>
                    <List />
                </nav>
            </header>
        </Fragment>
    )
}
