import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../src/styles/dashboard/dashboard.css";
import Vault from "../components/vault/Vault";
import Trade from "../components/trade/Trade";
import Navbar from "../../src/components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("vault");

  const openVault = () => {
    setActiveComponent("vault");
    // navigate("/user-dashboard/vault");
  };

  const openTrade = () => {
    setActiveComponent("trade");
    // navigate("/user-dashboard/trade");
  };

  return (
    <div className="dashboard col-lg-12">
      <Sidebar onVaultClick={openVault} onTradeClick={openTrade} />
      <div className="left-content ">
        <Navbar />
        {activeComponent === "vault" && <Vault />}
        {activeComponent === "trade" && <Trade />}
      </div>
    </div>
  );
}

export default Dashboard;
