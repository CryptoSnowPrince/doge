import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
// import {
//     FaInstagram,
//     FaTwitter,
//     FaDiscord,
// } from "react-icons/fa";
// import { BsJustify } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";

import "./Header.css";

const menu = [
    // { name: "Home", href: "home", current: false },
    // { name: "About", href: "about", current: false },
    // { name: "Referral", href: "referral", current: false }
    // { name: "ROADMAP", href: "roadmap", current: false },
    // { name: "TEAM", href: "team", current: false },
];

const social_link = [
    // { name: "instagram", href: "#", icon: <FaInstagram /> },
    // { name: "twitter", href: "#", icon: <FaTwitter /> },
    // { name: "discord", href: "#", icon: <FaDiscord /> },
];

export default function Header(props) {
    // const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 920px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    // const toggleNav = () => {
    //     setNavVisibility(!isNavVisible);
    // };

    return (
        <header className={`Header align-items-center m-auto ${isSmallScreen ? "" : ""}`}>

            {/* <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            > */}
                <nav className="Nav  d-flex align-items-center">
                    <a href="/"><img src={require("../../assets/logo.png")} className="Logo" alt="logo" /></a>
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            duration={50}
                            className={
                                "px-3 py-2 rounded-md text-base font-medium "
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                    {social_link.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={
                                "px-2 py-2 rounded-md text-base font-medium "
                            }
                        >
                            {item.icon}
                        </a>
                    ))}
                </nav>
            {/* </CSSTransition> */}
            <div className="d-flex justify-content-end">
                {!props.web3Provider ? (
                    <button
                        onClick={props.connect}
                        className=""
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <button
                        onClick={props.disconnect}
                        className=" "
                    >
                        {props.showAccountAddress}
                    </button>
                )}
            </div>

            {/* <button onClick={toggleNav} className="Burger">
                {isNavVisible ? <AiOutlineClose color="#4a4e57" /> : <BsJustify color="#4a4e57" />}
            </button> */}
        </header>
    );
}

