import React from "react";
import {
    FaTelegram,
} from "react-icons/fa";
import {
    AiFillTwitterCircle,
} from "react-icons/ai";
import {
    BsMedium,
} from "react-icons/bs";
import contract from "../../assets/contract.png"
import "./Footer.css";


const social_link = [
    { name: "Telegram", href: "#", icon: <FaTelegram size={30} /> },
    { name: "Twitter", href: "https://twitter.com/DCStaker", icon: <AiFillTwitterCircle size={30} /> },
    { name: "Medium", href: "https://medium.com/@dcstaker", icon: <BsMedium size={30} /> },
    { name: "Contract", href: "https://explorer.dogechain.dog/address/0xF8F7695D105AfD24B7a1Cd46Cf3adAc8Ae6eC93c/contracts", icon: <img alt="" src={contract} width="30px" /> },
];

export default function Footer() {
    return (
        <div className="align-items-center d-flex footer justify-content-around mt-5">
            {
                social_link.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={
                            "px-2 py-2 rounded-md text-base font-medium "
                        }
                        target="_blank" rel="noopener noreferrer"
                    >
                        {item.icon}&nbsp; {item.name}
                    </a>
                ))
            }
        </div>
    );
}

