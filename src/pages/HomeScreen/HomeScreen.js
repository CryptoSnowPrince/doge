import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lock from "../../assets/lock.png";
import copy from "../../assets/copy.png";

export default function HomeScreen(props) {
    // console.log(props.lastHatch)
    const [depositAmount1, setDepositAmount1] = useState(10000);
    const [depositAmount2, setDepositAmount2] = useState(10000);
    const [depositAmount3, setDepositAmount3] = useState(10000);
    const [depositAmount4, setDepositAmount4] = useState(10000);
    const [preload, setPreload] = useState(true);
    useEffect(() => {
        function handlePreloader() {
            if ($('.container').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }

        $(window).on('load', function () {
            handlePreloader();
        });
        setTimeout(() => {
            setPreload(false);
        }, 3000);
    }, [])
    return (
        <>
            <div className="preloader" style={{ display: preload ? "" : "none" }}><div className="wow zoomIn">
                <div className="spinner">
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                </div></div></div>
            <div className="container mt-5">
                <div className="d-flex gap-4 mb-5 flex-column flex-md-row">
                    <div className="home-title" style={{ flex: 2 }}> Stake Your DC &<br /> Earn up to 8% Daily!</div>
                    <div className="home-balance style-2" style={{ flex: 1 }}>
                        <div>Wallet Balance</div>
                        <div className="mt-4">$DC:</div>
                        <div>{props.userBnbAmount}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-between gap-4 mt-5 flex-column flex-lg-row">
                    <div className="style-2">
                        <div className="d-flex justify-content-center"><img src={lock} alt="" /></div>
                        <div className="d-flex justify-content-between">
                            <div>Daily Earnings</div>
                            <div>Total ROI</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>6%</div>
                            <div>42%</div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 mb-4">
                            <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="55.5" cy="55" rx="55.5" ry="55" fill="url(#paint0_linear_2_3)" />
                                <path d="M40.2875 65.3475C40.2875 67.2025 39.9783 68.9058 39.36 70.4575C38.7417 72.0092 37.8725 73.345 36.7525 74.465C35.6325 75.585 34.285 76.4542 32.71 77.0725C31.135 77.6908 29.385 78 27.46 78H17.8175V52.695H27.46C29.385 52.695 31.135 53.01 32.71 53.64C34.285 54.2583 35.6325 55.1275 36.7525 56.2475C37.8725 57.3558 38.7417 58.6858 39.36 60.2375C39.9783 61.7892 40.2875 63.4925 40.2875 65.3475ZM35.4575 65.3475C35.4575 63.9592 35.2708 62.7167 34.8975 61.62C34.5358 60.5117 34.005 59.5783 33.305 58.82C32.6167 58.05 31.7767 57.4608 30.785 57.0525C29.805 56.6442 28.6967 56.44 27.46 56.44H22.5425V74.255H27.46C28.6967 74.255 29.805 74.0508 30.785 73.6425C31.7767 73.2342 32.6167 72.6508 33.305 71.8925C34.005 71.1225 34.5358 70.1892 34.8975 69.0925C35.2708 67.9842 35.4575 66.7358 35.4575 65.3475ZM52.8016 70.335C51.5533 70.3933 50.5033 70.5042 49.6516 70.6675C48.8 70.8192 48.1175 71.0175 47.6041 71.2625C47.0908 71.5075 46.7233 71.7933 46.5016 72.12C46.28 72.4467 46.1691 72.8025 46.1691 73.1875C46.1691 73.9458 46.3908 74.4883 46.8341 74.815C47.2891 75.1417 47.8783 75.305 48.6016 75.305C49.4883 75.305 50.2525 75.1475 50.8941 74.8325C51.5475 74.5058 52.1833 74.0158 52.8016 73.3625V70.335ZM42.8966 62.5475C44.9616 60.6575 47.4466 59.7125 50.3516 59.7125C51.4016 59.7125 52.3408 59.8875 53.1691 60.2375C53.9975 60.5758 54.6975 61.0542 55.2691 61.6725C55.8408 62.2792 56.2725 63.0083 56.5641 63.86C56.8675 64.7117 57.0191 65.645 57.0191 66.66V78H55.0591C54.6508 78 54.3358 77.9417 54.1141 77.825C53.8925 77.6967 53.7175 77.4458 53.5891 77.0725L53.2041 75.7775C52.7491 76.1858 52.3058 76.5475 51.8741 76.8625C51.4425 77.1658 50.9933 77.4225 50.5266 77.6325C50.06 77.8425 49.5583 78 49.0216 78.105C48.4966 78.2217 47.9133 78.28 47.2716 78.28C46.5133 78.28 45.8133 78.1808 45.1716 77.9825C44.53 77.7725 43.9758 77.4633 43.5091 77.055C43.0425 76.6467 42.6808 76.1392 42.4241 75.5325C42.1675 74.9258 42.0391 74.22 42.0391 73.415C42.0391 72.96 42.115 72.5108 42.2666 72.0675C42.4183 71.6125 42.6633 71.1808 43.0016 70.7725C43.3516 70.3642 43.8008 69.9792 44.3491 69.6175C44.8975 69.2558 45.5683 68.9408 46.3616 68.6725C47.1666 68.4042 48.1 68.1883 49.1616 68.025C50.2233 67.85 51.4366 67.745 52.8016 67.71V66.66C52.8016 65.4583 52.545 64.5717 52.0316 64C51.5183 63.4167 50.7775 63.125 49.8091 63.125C49.1091 63.125 48.5258 63.2067 48.0591 63.37C47.6041 63.5333 47.2016 63.72 46.8516 63.93C46.5016 64.1283 46.1808 64.3092 45.8891 64.4725C45.6091 64.6358 45.2941 64.7175 44.9441 64.7175C44.6408 64.7175 44.3841 64.6417 44.1741 64.49C43.9641 64.3267 43.795 64.14 43.6666 63.93L42.8966 62.5475ZM76.8874 60.045L67.1049 82.935C66.9765 83.2383 66.8074 83.4658 66.5974 83.6175C66.399 83.7808 66.0899 83.8625 65.6699 83.8625H62.4499L65.8099 76.6525L58.5474 60.045H62.3449C62.6832 60.045 62.9457 60.1267 63.1324 60.29C63.3307 60.4533 63.4765 60.64 63.5699 60.85L67.3849 70.16C67.5132 70.475 67.6182 70.79 67.6999 71.105C67.7932 71.42 67.8807 71.7408 67.9624 72.0675C68.0674 71.7408 68.1724 71.42 68.2774 71.105C68.3824 70.7783 68.4991 70.4575 68.6274 70.1425L72.2324 60.85C72.3257 60.6167 72.4774 60.4242 72.6874 60.2725C72.9091 60.1208 73.1541 60.045 73.4224 60.045H76.8874ZM89.6134 63.545C89.4968 63.7317 89.3743 63.8658 89.2459 63.9475C89.1176 64.0175 88.9543 64.0525 88.7559 64.0525C88.5459 64.0525 88.3184 63.9942 88.0734 63.8775C87.8401 63.7608 87.5659 63.6325 87.2509 63.4925C86.9359 63.3408 86.5743 63.2067 86.1659 63.09C85.7693 62.9733 85.2968 62.915 84.7484 62.915C83.8968 62.915 83.2259 63.0958 82.7359 63.4575C82.2576 63.8192 82.0184 64.2917 82.0184 64.875C82.0184 65.26 82.1409 65.5867 82.3859 65.855C82.6426 66.1117 82.9751 66.3392 83.3834 66.5375C83.8034 66.7358 84.2759 66.9167 84.8009 67.08C85.3259 67.2317 85.8568 67.4008 86.3934 67.5875C86.9418 67.7742 87.4784 67.99 88.0034 68.235C88.5284 68.4683 88.9951 68.7717 89.4034 69.145C89.8234 69.5067 90.1559 69.9442 90.4009 70.4575C90.6576 70.9708 90.7859 71.5892 90.7859 72.3125C90.7859 73.1758 90.6284 73.975 90.3134 74.71C90.0101 75.4333 89.5551 76.0633 88.9484 76.6C88.3418 77.125 87.5893 77.5392 86.6909 77.8425C85.8043 78.1342 84.7776 78.28 83.6109 78.28C82.9926 78.28 82.3859 78.2217 81.7909 78.105C81.2076 78 80.6418 77.8483 80.0934 77.65C79.5568 77.4517 79.0551 77.2183 78.5884 76.95C78.1334 76.6817 77.7309 76.39 77.3809 76.075L78.3784 74.43C78.5068 74.2317 78.6584 74.08 78.8334 73.975C79.0084 73.87 79.2301 73.8175 79.4984 73.8175C79.7668 73.8175 80.0176 73.8933 80.2509 74.045C80.4959 74.1967 80.7759 74.36 81.0909 74.535C81.4059 74.71 81.7734 74.8733 82.1934 75.025C82.6251 75.1767 83.1676 75.2525 83.8209 75.2525C84.3343 75.2525 84.7718 75.1942 85.1334 75.0775C85.5068 74.9492 85.8101 74.7858 86.0434 74.5875C86.2884 74.3892 86.4634 74.1617 86.5684 73.905C86.6851 73.6367 86.7434 73.3625 86.7434 73.0825C86.7434 72.6625 86.6151 72.3183 86.3584 72.05C86.1134 71.7817 85.7809 71.5483 85.3609 71.35C84.9526 71.1517 84.4801 70.9767 83.9434 70.825C83.4184 70.6617 82.8759 70.4867 82.3159 70.3C81.7676 70.1133 81.2251 69.8975 80.6884 69.6525C80.1634 69.3958 79.6909 69.075 79.2709 68.69C78.8626 68.305 78.5301 67.8325 78.2734 67.2725C78.0284 66.7125 77.9059 66.0358 77.9059 65.2425C77.9059 64.5075 78.0518 63.8075 78.3434 63.1425C78.6351 62.4775 79.0609 61.9 79.6209 61.41C80.1926 60.9083 80.8984 60.5117 81.7384 60.22C82.5901 59.9167 83.5701 59.765 84.6784 59.765C85.9151 59.765 87.0409 59.9692 88.0559 60.3775C89.0709 60.7858 89.9168 61.3225 90.5934 61.9875L89.6134 63.545Z" fill="white" />
                                <path d="M67.11 29.695V31.5675C67.11 32.1275 67.0517 32.5825 66.935 32.9325C66.8183 33.2708 66.7017 33.5567 66.585 33.79L56.995 53.53C56.7967 53.9383 56.5167 54.2883 56.155 54.58C55.7933 54.86 55.3092 55 54.7025 55H51.57L61.3525 35.6625C61.5742 35.2658 61.79 34.9042 62 34.5775C62.2217 34.2392 62.4667 33.9183 62.735 33.615H50.625C50.3567 33.615 50.1233 33.5158 49.925 33.3175C49.7267 33.1192 49.6275 32.8858 49.6275 32.6175V29.695H67.11Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_3" x1="55.5" y1="0" x2="55.5" y2="110" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9947FF" />
                                        <stop offset="1" stopColor="#7872F5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div>Enter Amount $DC</div>
                        <div>
                            <input placeholder="0 DC" type="number" className="bnb-amount" min={10000} value={depositAmount1} onChange={(e) => { setDepositAmount1(e.target.value) }} />
                        </div>
                        <div className="mt-3 mb-4">
                            <button className="button1" onClick={() => props.handleDeposit(depositAmount1, 1)}>Deposit</button>
                        </div>
                    </div>
                    <div className="style-2">
                        <div className="d-flex justify-content-center"><img src={lock} alt="" /></div>
                        <div className="d-flex justify-content-between">
                            <div>Daily Earnings</div>
                            <div>Total ROI</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>7%</div>
                            <div>98%</div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 mb-4">
                            <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="55.5" cy="55" rx="55.5" ry="55" fill="url(#paint0_linear_2_3)" />
                                <path d="M40.2875 65.3475C40.2875 67.2025 39.9783 68.9058 39.36 70.4575C38.7417 72.0092 37.8725 73.345 36.7525 74.465C35.6325 75.585 34.285 76.4542 32.71 77.0725C31.135 77.6908 29.385 78 27.46 78H17.8175V52.695H27.46C29.385 52.695 31.135 53.01 32.71 53.64C34.285 54.2583 35.6325 55.1275 36.7525 56.2475C37.8725 57.3558 38.7417 58.6858 39.36 60.2375C39.9783 61.7892 40.2875 63.4925 40.2875 65.3475ZM35.4575 65.3475C35.4575 63.9592 35.2708 62.7167 34.8975 61.62C34.5358 60.5117 34.005 59.5783 33.305 58.82C32.6167 58.05 31.7767 57.4608 30.785 57.0525C29.805 56.6442 28.6967 56.44 27.46 56.44H22.5425V74.255H27.46C28.6967 74.255 29.805 74.0508 30.785 73.6425C31.7767 73.2342 32.6167 72.6508 33.305 71.8925C34.005 71.1225 34.5358 70.1892 34.8975 69.0925C35.2708 67.9842 35.4575 66.7358 35.4575 65.3475ZM52.8016 70.335C51.5533 70.3933 50.5033 70.5042 49.6516 70.6675C48.8 70.8192 48.1175 71.0175 47.6041 71.2625C47.0908 71.5075 46.7233 71.7933 46.5016 72.12C46.28 72.4467 46.1691 72.8025 46.1691 73.1875C46.1691 73.9458 46.3908 74.4883 46.8341 74.815C47.2891 75.1417 47.8783 75.305 48.6016 75.305C49.4883 75.305 50.2525 75.1475 50.8941 74.8325C51.5475 74.5058 52.1833 74.0158 52.8016 73.3625V70.335ZM42.8966 62.5475C44.9616 60.6575 47.4466 59.7125 50.3516 59.7125C51.4016 59.7125 52.3408 59.8875 53.1691 60.2375C53.9975 60.5758 54.6975 61.0542 55.2691 61.6725C55.8408 62.2792 56.2725 63.0083 56.5641 63.86C56.8675 64.7117 57.0191 65.645 57.0191 66.66V78H55.0591C54.6508 78 54.3358 77.9417 54.1141 77.825C53.8925 77.6967 53.7175 77.4458 53.5891 77.0725L53.2041 75.7775C52.7491 76.1858 52.3058 76.5475 51.8741 76.8625C51.4425 77.1658 50.9933 77.4225 50.5266 77.6325C50.06 77.8425 49.5583 78 49.0216 78.105C48.4966 78.2217 47.9133 78.28 47.2716 78.28C46.5133 78.28 45.8133 78.1808 45.1716 77.9825C44.53 77.7725 43.9758 77.4633 43.5091 77.055C43.0425 76.6467 42.6808 76.1392 42.4241 75.5325C42.1675 74.9258 42.0391 74.22 42.0391 73.415C42.0391 72.96 42.115 72.5108 42.2666 72.0675C42.4183 71.6125 42.6633 71.1808 43.0016 70.7725C43.3516 70.3642 43.8008 69.9792 44.3491 69.6175C44.8975 69.2558 45.5683 68.9408 46.3616 68.6725C47.1666 68.4042 48.1 68.1883 49.1616 68.025C50.2233 67.85 51.4366 67.745 52.8016 67.71V66.66C52.8016 65.4583 52.545 64.5717 52.0316 64C51.5183 63.4167 50.7775 63.125 49.8091 63.125C49.1091 63.125 48.5258 63.2067 48.0591 63.37C47.6041 63.5333 47.2016 63.72 46.8516 63.93C46.5016 64.1283 46.1808 64.3092 45.8891 64.4725C45.6091 64.6358 45.2941 64.7175 44.9441 64.7175C44.6408 64.7175 44.3841 64.6417 44.1741 64.49C43.9641 64.3267 43.795 64.14 43.6666 63.93L42.8966 62.5475ZM76.8874 60.045L67.1049 82.935C66.9765 83.2383 66.8074 83.4658 66.5974 83.6175C66.399 83.7808 66.0899 83.8625 65.6699 83.8625H62.4499L65.8099 76.6525L58.5474 60.045H62.3449C62.6832 60.045 62.9457 60.1267 63.1324 60.29C63.3307 60.4533 63.4765 60.64 63.5699 60.85L67.3849 70.16C67.5132 70.475 67.6182 70.79 67.6999 71.105C67.7932 71.42 67.8807 71.7408 67.9624 72.0675C68.0674 71.7408 68.1724 71.42 68.2774 71.105C68.3824 70.7783 68.4991 70.4575 68.6274 70.1425L72.2324 60.85C72.3257 60.6167 72.4774 60.4242 72.6874 60.2725C72.9091 60.1208 73.1541 60.045 73.4224 60.045H76.8874ZM89.6134 63.545C89.4968 63.7317 89.3743 63.8658 89.2459 63.9475C89.1176 64.0175 88.9543 64.0525 88.7559 64.0525C88.5459 64.0525 88.3184 63.9942 88.0734 63.8775C87.8401 63.7608 87.5659 63.6325 87.2509 63.4925C86.9359 63.3408 86.5743 63.2067 86.1659 63.09C85.7693 62.9733 85.2968 62.915 84.7484 62.915C83.8968 62.915 83.2259 63.0958 82.7359 63.4575C82.2576 63.8192 82.0184 64.2917 82.0184 64.875C82.0184 65.26 82.1409 65.5867 82.3859 65.855C82.6426 66.1117 82.9751 66.3392 83.3834 66.5375C83.8034 66.7358 84.2759 66.9167 84.8009 67.08C85.3259 67.2317 85.8568 67.4008 86.3934 67.5875C86.9418 67.7742 87.4784 67.99 88.0034 68.235C88.5284 68.4683 88.9951 68.7717 89.4034 69.145C89.8234 69.5067 90.1559 69.9442 90.4009 70.4575C90.6576 70.9708 90.7859 71.5892 90.7859 72.3125C90.7859 73.1758 90.6284 73.975 90.3134 74.71C90.0101 75.4333 89.5551 76.0633 88.9484 76.6C88.3418 77.125 87.5893 77.5392 86.6909 77.8425C85.8043 78.1342 84.7776 78.28 83.6109 78.28C82.9926 78.28 82.3859 78.2217 81.7909 78.105C81.2076 78 80.6418 77.8483 80.0934 77.65C79.5568 77.4517 79.0551 77.2183 78.5884 76.95C78.1334 76.6817 77.7309 76.39 77.3809 76.075L78.3784 74.43C78.5068 74.2317 78.6584 74.08 78.8334 73.975C79.0084 73.87 79.2301 73.8175 79.4984 73.8175C79.7668 73.8175 80.0176 73.8933 80.2509 74.045C80.4959 74.1967 80.7759 74.36 81.0909 74.535C81.4059 74.71 81.7734 74.8733 82.1934 75.025C82.6251 75.1767 83.1676 75.2525 83.8209 75.2525C84.3343 75.2525 84.7718 75.1942 85.1334 75.0775C85.5068 74.9492 85.8101 74.7858 86.0434 74.5875C86.2884 74.3892 86.4634 74.1617 86.5684 73.905C86.6851 73.6367 86.7434 73.3625 86.7434 73.0825C86.7434 72.6625 86.6151 72.3183 86.3584 72.05C86.1134 71.7817 85.7809 71.5483 85.3609 71.35C84.9526 71.1517 84.4801 70.9767 83.9434 70.825C83.4184 70.6617 82.8759 70.4867 82.3159 70.3C81.7676 70.1133 81.2251 69.8975 80.6884 69.6525C80.1634 69.3958 79.6909 69.075 79.2709 68.69C78.8626 68.305 78.5301 67.8325 78.2734 67.2725C78.0284 66.7125 77.9059 66.0358 77.9059 65.2425C77.9059 64.5075 78.0518 63.8075 78.3434 63.1425C78.6351 62.4775 79.0609 61.9 79.6209 61.41C80.1926 60.9083 80.8984 60.5117 81.7384 60.22C82.5901 59.9167 83.5701 59.765 84.6784 59.765C85.9151 59.765 87.0409 59.9692 88.0559 60.3775C89.0709 60.7858 89.9168 61.3225 90.5934 61.9875L89.6134 63.545Z" fill="white" />
                                <path d="M53.1125 50.7625V54H39.1125V50.7625H44.24V36.01C44.24 35.4267 44.2575 34.8258 44.2925 34.2075L40.6525 37.2525C40.4425 37.4158 40.2325 37.5208 40.0225 37.5675C39.8242 37.6025 39.6317 37.6025 39.445 37.5675C39.27 37.5325 39.1125 37.4742 38.9725 37.3925C38.8325 37.2992 38.7275 37.2 38.6575 37.095L37.2925 35.2225L45.01 28.66H48.5625V50.7625H53.1125ZM67.7627 44.4625V36.185C67.7627 35.4033 67.8152 34.54 67.9202 33.595L60.0627 44.4625H67.7627ZM74.7102 44.4625V46.965C74.7102 47.1983 74.6344 47.4025 74.4827 47.5775C74.3311 47.7408 74.1152 47.8225 73.8352 47.8225H71.5252V54H67.7627V47.8225H57.0877C56.7961 47.8225 56.5394 47.735 56.3177 47.56C56.0961 47.3733 55.9561 47.1458 55.8977 46.8775L55.4427 44.69L67.4302 28.6775H71.5252V44.4625H74.7102Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_3" x1="55.5" y1="0" x2="55.5" y2="110" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9947FF" />
                                        <stop offset="1" stopColor="#7872F5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div>Enter Amount $DC</div>
                        <div>
                            <input placeholder="0 DC" type="number" className="bnb-amount" min={10000} value={depositAmount2} onChange={(e) => { setDepositAmount2(e.target.value) }} />
                        </div>
                        <div className="mt-3 mb-4">
                            <button className="button1" onClick={() => props.handleDeposit(depositAmount2, 2)}>Deposit</button>
                        </div>
                    </div>
                    <div className="style-2">
                        <div className="d-flex justify-content-center"><img src={lock} alt="" /></div>
                        <div className="d-flex justify-content-between">
                            <div>Daily Earnings</div>
                            <div>Total ROI</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>8%</div>
                            <div>224%</div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 mb-4">
                            <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="55.5" cy="55" rx="55.5" ry="55" fill="url(#paint0_linear_2_3)" />
                                <path d="M40.2875 65.3475C40.2875 67.2025 39.9783 68.9058 39.36 70.4575C38.7417 72.0092 37.8725 73.345 36.7525 74.465C35.6325 75.585 34.285 76.4542 32.71 77.0725C31.135 77.6908 29.385 78 27.46 78H17.8175V52.695H27.46C29.385 52.695 31.135 53.01 32.71 53.64C34.285 54.2583 35.6325 55.1275 36.7525 56.2475C37.8725 57.3558 38.7417 58.6858 39.36 60.2375C39.9783 61.7892 40.2875 63.4925 40.2875 65.3475ZM35.4575 65.3475C35.4575 63.9592 35.2708 62.7167 34.8975 61.62C34.5358 60.5117 34.005 59.5783 33.305 58.82C32.6167 58.05 31.7767 57.4608 30.785 57.0525C29.805 56.6442 28.6967 56.44 27.46 56.44H22.5425V74.255H27.46C28.6967 74.255 29.805 74.0508 30.785 73.6425C31.7767 73.2342 32.6167 72.6508 33.305 71.8925C34.005 71.1225 34.5358 70.1892 34.8975 69.0925C35.2708 67.9842 35.4575 66.7358 35.4575 65.3475ZM52.8016 70.335C51.5533 70.3933 50.5033 70.5042 49.6516 70.6675C48.8 70.8192 48.1175 71.0175 47.6041 71.2625C47.0908 71.5075 46.7233 71.7933 46.5016 72.12C46.28 72.4467 46.1691 72.8025 46.1691 73.1875C46.1691 73.9458 46.3908 74.4883 46.8341 74.815C47.2891 75.1417 47.8783 75.305 48.6016 75.305C49.4883 75.305 50.2525 75.1475 50.8941 74.8325C51.5475 74.5058 52.1833 74.0158 52.8016 73.3625V70.335ZM42.8966 62.5475C44.9616 60.6575 47.4466 59.7125 50.3516 59.7125C51.4016 59.7125 52.3408 59.8875 53.1691 60.2375C53.9975 60.5758 54.6975 61.0542 55.2691 61.6725C55.8408 62.2792 56.2725 63.0083 56.5641 63.86C56.8675 64.7117 57.0191 65.645 57.0191 66.66V78H55.0591C54.6508 78 54.3358 77.9417 54.1141 77.825C53.8925 77.6967 53.7175 77.4458 53.5891 77.0725L53.2041 75.7775C52.7491 76.1858 52.3058 76.5475 51.8741 76.8625C51.4425 77.1658 50.9933 77.4225 50.5266 77.6325C50.06 77.8425 49.5583 78 49.0216 78.105C48.4966 78.2217 47.9133 78.28 47.2716 78.28C46.5133 78.28 45.8133 78.1808 45.1716 77.9825C44.53 77.7725 43.9758 77.4633 43.5091 77.055C43.0425 76.6467 42.6808 76.1392 42.4241 75.5325C42.1675 74.9258 42.0391 74.22 42.0391 73.415C42.0391 72.96 42.115 72.5108 42.2666 72.0675C42.4183 71.6125 42.6633 71.1808 43.0016 70.7725C43.3516 70.3642 43.8008 69.9792 44.3491 69.6175C44.8975 69.2558 45.5683 68.9408 46.3616 68.6725C47.1666 68.4042 48.1 68.1883 49.1616 68.025C50.2233 67.85 51.4366 67.745 52.8016 67.71V66.66C52.8016 65.4583 52.545 64.5717 52.0316 64C51.5183 63.4167 50.7775 63.125 49.8091 63.125C49.1091 63.125 48.5258 63.2067 48.0591 63.37C47.6041 63.5333 47.2016 63.72 46.8516 63.93C46.5016 64.1283 46.1808 64.3092 45.8891 64.4725C45.6091 64.6358 45.2941 64.7175 44.9441 64.7175C44.6408 64.7175 44.3841 64.6417 44.1741 64.49C43.9641 64.3267 43.795 64.14 43.6666 63.93L42.8966 62.5475ZM76.8874 60.045L67.1049 82.935C66.9765 83.2383 66.8074 83.4658 66.5974 83.6175C66.399 83.7808 66.0899 83.8625 65.6699 83.8625H62.4499L65.8099 76.6525L58.5474 60.045H62.3449C62.6832 60.045 62.9457 60.1267 63.1324 60.29C63.3307 60.4533 63.4765 60.64 63.5699 60.85L67.3849 70.16C67.5132 70.475 67.6182 70.79 67.6999 71.105C67.7932 71.42 67.8807 71.7408 67.9624 72.0675C68.0674 71.7408 68.1724 71.42 68.2774 71.105C68.3824 70.7783 68.4991 70.4575 68.6274 70.1425L72.2324 60.85C72.3257 60.6167 72.4774 60.4242 72.6874 60.2725C72.9091 60.1208 73.1541 60.045 73.4224 60.045H76.8874ZM89.6134 63.545C89.4968 63.7317 89.3743 63.8658 89.2459 63.9475C89.1176 64.0175 88.9543 64.0525 88.7559 64.0525C88.5459 64.0525 88.3184 63.9942 88.0734 63.8775C87.8401 63.7608 87.5659 63.6325 87.2509 63.4925C86.9359 63.3408 86.5743 63.2067 86.1659 63.09C85.7693 62.9733 85.2968 62.915 84.7484 62.915C83.8968 62.915 83.2259 63.0958 82.7359 63.4575C82.2576 63.8192 82.0184 64.2917 82.0184 64.875C82.0184 65.26 82.1409 65.5867 82.3859 65.855C82.6426 66.1117 82.9751 66.3392 83.3834 66.5375C83.8034 66.7358 84.2759 66.9167 84.8009 67.08C85.3259 67.2317 85.8568 67.4008 86.3934 67.5875C86.9418 67.7742 87.4784 67.99 88.0034 68.235C88.5284 68.4683 88.9951 68.7717 89.4034 69.145C89.8234 69.5067 90.1559 69.9442 90.4009 70.4575C90.6576 70.9708 90.7859 71.5892 90.7859 72.3125C90.7859 73.1758 90.6284 73.975 90.3134 74.71C90.0101 75.4333 89.5551 76.0633 88.9484 76.6C88.3418 77.125 87.5893 77.5392 86.6909 77.8425C85.8043 78.1342 84.7776 78.28 83.6109 78.28C82.9926 78.28 82.3859 78.2217 81.7909 78.105C81.2076 78 80.6418 77.8483 80.0934 77.65C79.5568 77.4517 79.0551 77.2183 78.5884 76.95C78.1334 76.6817 77.7309 76.39 77.3809 76.075L78.3784 74.43C78.5068 74.2317 78.6584 74.08 78.8334 73.975C79.0084 73.87 79.2301 73.8175 79.4984 73.8175C79.7668 73.8175 80.0176 73.8933 80.2509 74.045C80.4959 74.1967 80.7759 74.36 81.0909 74.535C81.4059 74.71 81.7734 74.8733 82.1934 75.025C82.6251 75.1767 83.1676 75.2525 83.8209 75.2525C84.3343 75.2525 84.7718 75.1942 85.1334 75.0775C85.5068 74.9492 85.8101 74.7858 86.0434 74.5875C86.2884 74.3892 86.4634 74.1617 86.5684 73.905C86.6851 73.6367 86.7434 73.3625 86.7434 73.0825C86.7434 72.6625 86.6151 72.3183 86.3584 72.05C86.1134 71.7817 85.7809 71.5483 85.3609 71.35C84.9526 71.1517 84.4801 70.9767 83.9434 70.825C83.4184 70.6617 82.8759 70.4867 82.3159 70.3C81.7676 70.1133 81.2251 69.8975 80.6884 69.6525C80.1634 69.3958 79.6909 69.075 79.2709 68.69C78.8626 68.305 78.5301 67.8325 78.2734 67.2725C78.0284 66.7125 77.9059 66.0358 77.9059 65.2425C77.9059 64.5075 78.0518 63.8075 78.3434 63.1425C78.6351 62.4775 79.0609 61.9 79.6209 61.41C80.1926 60.9083 80.8984 60.5117 81.7384 60.22C82.5901 59.9167 83.5701 59.765 84.6784 59.765C85.9151 59.765 87.0409 59.9692 88.0559 60.3775C89.0709 60.7858 89.9168 61.3225 90.5934 61.9875L89.6134 63.545Z" fill="white" />
                                <path d="M52.1675 50.975C52.6342 50.975 53.0017 51.1092 53.27 51.3775C53.55 51.6342 53.69 51.9783 53.69 52.41V55H36.33V53.565C36.33 53.2733 36.3883 52.97 36.505 52.655C36.6333 52.3283 36.8317 52.0367 37.1 51.78L44.7825 44.08C45.4242 43.4267 45.9958 42.8025 46.4975 42.2075C47.0108 41.6125 47.4367 41.0233 47.775 40.44C48.1133 39.8567 48.37 39.2675 48.545 38.6725C48.7317 38.0658 48.825 37.43 48.825 36.765C48.825 36.1583 48.7375 35.6275 48.5625 35.1725C48.3875 34.7058 48.1367 34.315 47.81 34C47.495 33.685 47.11 33.4517 46.655 33.3C46.2117 33.1367 45.71 33.055 45.15 33.055C44.6367 33.055 44.1583 33.1308 43.715 33.2825C43.2833 33.4225 42.8983 33.6267 42.56 33.895C42.2217 34.1517 41.9358 34.455 41.7025 34.805C41.4692 35.155 41.2942 35.54 41.1775 35.96C40.9792 36.4967 40.7225 36.8525 40.4075 37.0275C40.0925 37.2025 39.6375 37.2433 39.0425 37.15L36.7675 36.7475C36.9425 35.5342 37.2808 34.4725 37.7825 33.5625C38.2842 32.6408 38.9083 31.8767 39.655 31.27C40.4133 30.6517 41.2767 30.1908 42.245 29.8875C43.225 29.5725 44.275 29.415 45.395 29.415C46.5617 29.415 47.6292 29.59 48.5975 29.94C49.5658 30.2783 50.3942 30.7625 51.0825 31.3925C51.7708 32.0225 52.3075 32.7808 52.6925 33.6675C53.0775 34.5542 53.27 35.54 53.27 36.625C53.27 37.5583 53.13 38.4217 52.85 39.215C52.5817 40.0083 52.2142 40.7667 51.7475 41.49C51.2925 42.2133 50.7558 42.9133 50.1375 43.59C49.5192 44.2667 48.8717 44.955 48.195 45.655L42.49 51.4825C43.0383 51.3192 43.5808 51.1967 44.1175 51.115C44.6658 51.0217 45.185 50.975 45.675 50.975H52.1675ZM65.4527 51.9025C66.1644 51.9025 66.7886 51.8033 67.3252 51.605C67.8619 51.395 68.3111 51.1092 68.6727 50.7475C69.0461 50.3858 69.3261 49.9542 69.5127 49.4525C69.6994 48.9508 69.7927 48.4083 69.7927 47.825C69.7927 46.4367 69.4077 45.3867 68.6377 44.675C67.8677 43.9633 66.8061 43.6075 65.4527 43.6075C64.0994 43.6075 63.0377 43.9633 62.2677 44.675C61.4977 45.3867 61.1127 46.4367 61.1127 47.825C61.1127 48.4083 61.2061 48.9508 61.3927 49.4525C61.5794 49.9542 61.8536 50.3858 62.2152 50.7475C62.5886 51.1092 63.0436 51.395 63.5802 51.605C64.1169 51.8033 64.7411 51.9025 65.4527 51.9025ZM65.4527 32.67C64.8111 32.67 64.2569 32.7692 63.7902 32.9675C63.3236 33.1658 62.9327 33.4342 62.6177 33.7725C62.3144 34.0992 62.0869 34.4783 61.9352 34.91C61.7952 35.3417 61.7252 35.7967 61.7252 36.275C61.7252 36.7767 61.7836 37.2667 61.9002 37.745C62.0286 38.2117 62.2386 38.6317 62.5302 39.005C62.8219 39.3667 63.2069 39.6583 63.6852 39.88C64.1636 40.1017 64.7527 40.2125 65.4527 40.2125C66.1527 40.2125 66.7419 40.1017 67.2202 39.88C67.6986 39.6583 68.0836 39.3667 68.3752 39.005C68.6669 38.6317 68.8711 38.2117 68.9877 37.745C69.1161 37.2667 69.1802 36.7767 69.1802 36.275C69.1802 35.7967 69.1044 35.3417 68.9527 34.91C68.8011 34.4783 68.5736 34.0992 68.2702 33.7725C67.9669 33.4342 67.5819 33.1658 67.1152 32.9675C66.6486 32.7692 66.0944 32.67 65.4527 32.67ZM69.7227 41.805C71.2627 42.3067 72.4002 43.0767 73.1352 44.115C73.8702 45.1417 74.2377 46.4017 74.2377 47.895C74.2377 49.015 74.0219 50.03 73.5902 50.94C73.1702 51.85 72.5752 52.6258 71.8052 53.2675C71.0352 53.9092 70.1077 54.405 69.0227 54.755C67.9494 55.105 66.7594 55.28 65.4527 55.28C64.1461 55.28 62.9502 55.105 61.8652 54.755C60.7919 54.405 59.8702 53.9092 59.1002 53.2675C58.3302 52.6258 57.7294 51.85 57.2977 50.94C56.8777 50.03 56.6677 49.015 56.6677 47.895C56.6677 46.4017 57.0352 45.1417 57.7702 44.115C58.5052 43.0767 59.6427 42.3067 61.1827 41.805C59.9577 41.2917 59.0361 40.5625 58.4177 39.6175C57.8111 38.6725 57.5077 37.535 57.5077 36.205C57.5077 35.2483 57.7002 34.3558 58.0852 33.5275C58.4819 32.6992 59.0302 31.9817 59.7302 31.375C60.4302 30.7567 61.2644 30.2783 62.2327 29.94C63.2127 29.59 64.2861 29.415 65.4527 29.415C66.6194 29.415 67.6869 29.59 68.6552 29.94C69.6352 30.2783 70.4752 30.7567 71.1752 31.375C71.8752 31.9817 72.4177 32.6992 72.8027 33.5275C73.1994 34.3558 73.3977 35.2483 73.3977 36.205C73.3977 37.535 73.0886 38.6725 72.4702 39.6175C71.8636 40.5625 70.9477 41.2917 69.7227 41.805Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_3" x1="55.5" y1="0" x2="55.5" y2="110" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9947FF" />
                                        <stop offset="1" stopColor="#7872F5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div>Enter Amount $DC</div>
                        <div>
                            <input placeholder="0 DC" type="number" className="bnb-amount" min={10000} value={depositAmount3} onChange={(e) => { setDepositAmount3(e.target.value) }} />
                        </div>
                        <div className="mt-3 mb-4">
                            <button className="button1" onClick={() => props.handleDeposit(depositAmount3, 3)}>Deposit</button>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="mt-5 style-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div>
                            <div> Basic Unlocked (4% Daily)</div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div>Enter Amount $DC</div>
                                    <input placeholder="0 DC" type="number" className="bnb-amount" min={0} value={depositAmount4} onChange={(e) => { setDepositAmount4(e.target.value) }} />
                                </div>

                            </div>
                            <div>
                                <button className="button1  mb-4 mt-3"  onClick={() => props.handleDeposit(depositAmount4, 0)}>Deposit</button>
                            </div>
                        </div>
                        <div>
                            <div>Basic Unlocked information<br /> 4% Daily 1460% APR.</div>
                            <div>0.5% paid every 3hours.</div>
                        </div>
                    </div>
                    {/* <div className="position-absolute w-100" style={{top: "-20px"}}>
                        <div className="d-flex justify-content-center">
                            <button className="p-2 border-0 ps-4 pe-4" style={{backgroundColor: "#D9D9D9", borderRadius: "16px", color: "#fff"}}>COMING SOON</button>
                        </div>
                    </div> */}
                </div>
                <div className="d-flex gap-5 mt-4 flex-column flex-md-row">
                    <div className="style-2" style={{ flex: 1 }}>
                        <div>Earnings</div>
                        <div className="mt-2">Staked $DC</div>
                        <div>{props.setUserStakedAmount}</div>
                        <div className="mt-2">Available $DC to withdraw</div>
                        <div>{props.userPendingAmount}</div>
                        <div className="ps-4 pe-4 mt-2 mb-2">
                            <button className="button1" onClick={() => props.handleClaim()}>Withdraw</button>
                        </div>
                    </div>
                    <div className="style-2" style={{ flex: 2 }}>
                        <div>Referral link</div>
                        <div className="d-flex gap-4" >
                            <input style={{ maxWidth: "unset", flex: 1, fontSize: "16px" }} readOnly placeholder="Please connect your wallet for your referral link." type="text" className="bnb-amount referral-link" value={`https://dcstaker.com/?ref=${props.account}`} />
                            <img style={{ cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText("https://dcstaker.com/?ref=" + props.account); toast.success('Copied! Share with anyone to earn DC.'); }} height={40} alt="" src={copy} />
                        </div>
                        <div className="mt-4">Total Referral Earned</div>
                        <div className="mt-5">Total ReferralWithdrawn</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
