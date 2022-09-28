import React, { useState } from "react";
// import gif from "../../assets/New-450-Day-Website 425x133-banner.gif"
// import {
//     FaInstagram,
//     FaTwitter,
//     FaDiscord,
// } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomeScreen(props) {
    // console.log(props.lastHatch)
    const [depositAmount, setDepositAmount] = useState();
    return (
        <div className="d-flex mt-80 justify-content-center ">
            <div className="mw-800 p-2">
                <div className="referral-title text-center">EARN 10% OF REFERRALS</div>
                <div className="referral-content">
                    <div className="mt-2">Share your DC Staker referral link. Our contract pays you 10% referral fee when anyone uses your link to deposit.</div>
                    <div className="mt-2">Please connect your wallet to see your referral link.</div>
                </div>
                <div className="style-3 mw-600 mt-4 m-auto">
                    <div className="text-center">Referral link</div>
                    <div className="d-flex"> <input  placeholder="" type="number" style={{width: "100%", maxWidth: "unset"}} className="bnb-amount" min={0} value={depositAmount} onChange={(e) => { setDepositAmount(e.target.value) }} /></div>
                    <div><button className="button2" onClick={props.handleClaim}> Withdraw</button></div>
                </div>
            </div>
        </div >
    );
}

