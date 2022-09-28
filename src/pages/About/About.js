import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomeScreen(props) {
    // console.log(props.lastHatch)
    const [depositAmount, setDepositAmount] = useState(0);
    return (
        <div className="d-flex justify-content-center about-section">
            <div className="mw-800 p-2">
                <div className="about-title text-center">About DC Staker</div>
                <div className="about-content">
                    <div className="mt-4">DC Staker is an opportunity for DC holders, or those who want to earn passive income, to earn 6% daily on their deposited amount. </div>
                    <div className="mt-4">Once DC has been deposited, your DC Staker journey begins. With the DC generated the users have the option to withdraw their profits, or compound and continue to earn.</div>
                    <div className="mt-4">The contract has been audited and is visibile on etherscan for viewing.</div>
                </div>
            </div>
        </div >
    );
}

