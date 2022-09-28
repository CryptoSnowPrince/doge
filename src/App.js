import React, { useEffect, useState, useCallback, useReducer } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, ethers } from "ethers";
import Web3 from "web3";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from "./contracts/config";
import ABI from "./contracts/abi/Tminer.json";
import DCABI from "./contracts/abi/dctoken.json";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './pages/HomeScreen/HomeScreen'
// import About from './pages/About/About'
// import Referral from './pages/Referral/Referral'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactAddress = config.SafeMutual[config.chainID];
const dcAddress = "0x7B4328c127B85369D9f82ca0503B000D09CF9180"; // mainnet
// const dcAddress = "0x17a57c15b77d80d9977b7be0874b490ad422bb90"; // testnet



let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: config.INFURA_ID, // required
          rpc: {
            56: config.RpcURL[config.chainID],
          },
        },
      },
    }, // required
    theme: "dark",
  });
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.chainId,
      };
    case "RESET_WEB3_PROVIDER":
      return initialState;
    default:
      throw new Error();
  }
}

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const adminWalletAddress = queryParams.get('ref') ? queryParams.get('ref') : "0x0000000000000000000000000000000000000000";
  const [showAccountAddress, setShowAccountAddress] = useState("");
  const [account, setAccount] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider, web3Provider } = state;

  const [userBnbAmount, setUserBnbAmount] = useState(0);
  const [userStakedAmount, setUserStakedAmount] = useState(0);
  const [userPendingAmount, setUserPendingAmount] = useState(0);
  const [allowanceAmount, setAllowanceAmount] = useState(0);


  const connect = useCallback(async function () {
    try {
      const provider = await web3Modal.connect();
      if (window.ethereum) {
        // check if the chain to connect to is installed
        if ((await new providers.Web3Provider(provider).getNetwork()).chainId !== config.chainID) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: config.chainHexID[config.chainID] }], // chainId must be in hexadecimal numbers
            });
          } catch (error) {
            console.log("network switching error: ", error);
          }
        }
      } else {
        console.log(
          "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
        );
      }

      const web3Provider = new providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const account = await signer.getAddress();
      const network = await web3Provider.getNetwork();

      if (network.chainId !== config.chainID) {
        alert(`Switch network to Dogechain Mainnet on your wallet!`);
        return;
      }

      const show_address =
        account.slice(0, 5) + "..." + account.slice(-4, account.length);
      // setSigner(web3Provider.getSigner());
      setShowAccountAddress(show_address);
      setAccount(account);
      dispatch({
        type: "SET_WEB3_PROVIDER",
        provider,
        web3Provider,
        show_address,
        chainId: network.chainId,
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          if (window.ethereum) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: config.chainHexID[config.chainID],
                  rpcUrl: config.RpcURL[config.chainID],
                },
              ],
            });
          }
        } catch (addError) {
          console.log(addError);
        }
      } else if (error.code === 4001) {
        console.log(error);
      }
      console.log(`${error}`);
    }
  }, []);
  const disconnect = useCallback(async function () {
    await web3Modal.clearCachedProvider();
    // setSigner(null);
    setShowAccountAddress(null);
    setAccount(null);
    dispatch({
      type: "RESET_WEB3_PROVIDER",
    });
  }, []);
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);
  useEffect(() => {
    if (provider) {
      const handleAccountsChanged = (accounts) => {
        connect();
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        });
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, [provider]);


  useEffect(() => {
    const init = async () => {
      try {
        const readWeb3 = new Web3(config.RpcURL[config.chainID]);
        if (web3Provider && readWeb3.utils.isAddress(account)) {
          const dcContract = new readWeb3.eth.Contract(DCABI, dcAddress);
          let dcbalance = await dcContract.methods.balanceOf(account).call();
          dcbalance = ethers.utils.formatUnits(dcbalance, "ether");
          setUserBnbAmount((dcbalance - 0).toFixed(2));

          const allowanceAmount = await dcContract.methods.allowance(account, contactAddress).call();
          setAllowanceAmount(ethers.utils.formatUnits(allowanceAmount, "ether"));


          const stakingContract = new readWeb3.eth.Contract(ABI, contactAddress);

          let useinfo0 = await stakingContract.methods.userInfo(0, account).call();
          let useinfo1 = await stakingContract.methods.userInfo(1, account).call();
          let useinfo2 = await stakingContract.methods.userInfo(2, account).call();
          let useinfo3 = await stakingContract.methods.userInfo(3, account).call();


          let stakedamount0 = ethers.utils.formatUnits(useinfo0[0], "ether");
          let stakedamount1 = ethers.utils.formatUnits(useinfo1[0], "ether");
          let stakedamount2 = ethers.utils.formatUnits(useinfo2[0], "ether");
          let stakedamount3 = ethers.utils.formatUnits(useinfo3[0], "ether");
          let stakedTotalAmounts = 0;
          stakedTotalAmounts = (stakedamount0 - 0) + (stakedamount1 - 0) + (stakedamount2 - 0) + (stakedamount3 - 0);
          setUserStakedAmount(stakedTotalAmounts);

          let pendingReward0 = ethers.utils.formatUnits(useinfo0[2], "ether");
          let pendingReward1 = ethers.utils.formatUnits(useinfo1[2], "ether");
          let pendingReward2 = ethers.utils.formatUnits(useinfo2[2], "ether");
          let pendingReward3 = ethers.utils.formatUnits(useinfo3[2], "ether");
          let pendingTotalReward = 0;

          const now_time = new Date().getTime();
          let starttime0 = ((now_time - (useinfo0[1] - 0) * 1000) / 1000) / (60 * 60 * 3);
          let starttime1 = ((now_time - (useinfo1[1] - 0) * 1000) / 1000) / (60 * 60 * 24 * 7);
          let starttime2 = ((now_time - (useinfo2[1] - 0) * 1000) / 1000) / (60 * 60 * 24 * 14);
          let starttime3 = ((now_time - (useinfo3[1] - 0) * 1000) / 1000) / (60 * 60 * 24 * 28);

          console.log(useinfo0, useinfo1, useinfo2, useinfo3)
          console.log(starttime0, starttime1, starttime2, starttime3);

          if (starttime0 >= 1) {
            pendingTotalReward += (stakedamount0 - 0);
            pendingTotalReward += (pendingReward0 - 0);
          }
          if (starttime1 >= 1) {
            pendingTotalReward += (stakedamount1 - 0);
            pendingTotalReward += (pendingReward1 - 0);
          }
          if (starttime2 >= 1) {
            pendingTotalReward += (stakedamount2 - 0);
            pendingTotalReward += (pendingReward2 - 0);
          }
          if (starttime3 >= 1) {
            pendingTotalReward += (stakedamount3 - 0);
            pendingTotalReward += (pendingReward3 - 0);
          }

          setUserPendingAmount(pendingTotalReward * 90 / 100);


        }
      } catch (error) {
        console.log(`${error}`);
      }
    }
    init();
  }, [account, web3Provider, refresh]);


  const handleDeposit = async (amount, poolId) => {
    console.log(allowanceAmount);
    try {
      if (allowanceAmount < amount) {
        const approveWeb3 = new Web3(provider);
        const approveContract = new approveWeb3.eth.Contract(DCABI, dcAddress);
        await approveContract.methods.approve(contactAddress, ethers.constants.MaxUint256).send({
          from: account,
        });
      }

      const writeWeb3 = new Web3(provider);
      const nowContract = new writeWeb3.eth.Contract(ABI, contactAddress);
      await nowContract.methods.deposit(poolId, writeWeb3.utils.toWei(Number(amount).toString(), "ether"), adminWalletAddress).send({
        from: account,
      });
      toast.success('success! ' + amount + ' deposited.');
      setRefresh(!refresh);
    }
    catch (error) {
      console.log(error.message);
    }

  }
  const handleCompound = async () => {
    try {
      const writeWeb3 = new Web3(provider);
      const nowContract = new writeWeb3.eth.Contract(ABI, contactAddress);
      await nowContract.methods.hatchBNB(adminWalletAddress).send({
        from: account,
      })
      setRefresh(!refresh);
    }
    catch (error) {
      console.log(error.message);
    }
  }
  const handleClaim = async () => {
    try {
      const writeWeb3 = new Web3(provider);
      const nowContract = new writeWeb3.eth.Contract(ABI, contactAddress);
      await nowContract.methods.withdrawAll().send({
        from: account,
      })
      setRefresh(!refresh);
    }
    catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: "100vh" }}>
          <div>
            <Header showAccountAddress={showAccountAddress}
              connect={connect}
              disconnect={disconnect} web3Provider={web3Provider} />
            <Routes>
              <Route index
                element={<HomeScreen web3Provider={web3Provider} userPendingAmount={userPendingAmount} account={account} setUserStakedAmount={userStakedAmount} userBnbAmount={userBnbAmount} handleDeposit={(depositAmount, poolId) => handleDeposit(depositAmount, poolId)} handleCompound={handleCompound} handleClaim={handleClaim} ></HomeScreen>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
