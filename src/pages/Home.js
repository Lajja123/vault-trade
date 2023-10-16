import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

function Home() {
  const { address, isConnected, isDisconnected } = useAccount();
  const walletAddress = address;
  console.log(walletAddress);
  const navigate = useNavigate();

  const handleDashboardNavigation = () => {
    if (isConnected) {
      navigate("/user-dashboard");
    } else {
      alert("Please connect your wallet");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ width: "50%", margin: "50px auto", textAlign: "center" }}>
        <button
          className="home-btn"
          onClick={() => handleDashboardNavigation()}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            border: "none",
            padding: "10px",
          }}
        >
          Launch App
        </button>
      </div>
    </div>
  );
}
export default Home;
