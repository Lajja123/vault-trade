import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../../styles/navbar/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-main">
        <div style={{ width: "30%", fontSize: "2rem" }}>TradeVault</div>
      </div>
      <div>
        <ConnectButton />
      </div>
    </nav>
  );
}

export default Navbar;
