import React from "react";
import "../../styles/sidebar/sidebar.css";
import { useState } from "react";

function Sidebar({ onVaultClick, onTradeClick }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedflex, setIsClickedflex] = useState(false);

  const elementStyle = {
    width: isClicked ? "250px" : "100px",
    transition: "width 0.5s ease-in-out",
    display: "flex", // Add display: flex for flex properties
    alignItems: "center", // Add align-items property
    alignContent: "flex-start", // Add align-content property
    flexDirection: "column-reverse", // Add flex-direction property
  };
  const elementStyleFlex = {
    display: isClicked ? "flex" : "flex", // Add display: flex for flex properties
    alignItems: isClicked ? "center" : "center", // Add align-items property
    alignContent: isClicked ? "space-around" : "flex-start", // Add align-content property
    flexDirection: isClicked ? "row" : "column-reverse", // Add flex-direction property
  };
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="sidebar-main " style={elementStyle}>
      <div onClick={handleButtonClick}>
        {" "}
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24.000000pt"
          height="24.000000pt"
        >
          <path
            fill="currentColor"
            fill-rule="nonzero"
            d="M11.6 18.43c.42 0 .74-.32.74-.74 0-.2-.09-.4-.22-.53L6.8 11.97l5.3-5.2a.78.78 0 0 0 .23-.53.73.73 0 0 0-.75-.74.71.71 0 0 0-.52.22l-5.82 5.69a.75.75 0 0 0 0 1.12l5.82 5.68c.14.14.31.22.52.22zm6.6 0c.42 0 .74-.32.74-.74 0-.2-.08-.4-.22-.53l-5.31-5.2 5.3-5.19a.74.74 0 0 0 .23-.53.73.73 0 0 0-.75-.74c-.2 0-.38.08-.52.22l-5.82 5.69a.75.75 0 0 0 0 1.12l5.82 5.68c.14.14.32.22.52.22z"
          ></path>
        </svg>
      </div>

      <div className="sidebar">
        <div className="icon-flex-main" style={elementStyleFlex}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt"
            height="24.000000pt"
            viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M148 224 c-16 -8 -28 -19 -28 -24 0 -5 -24 -10 -52 -12 l-53 -3 -3
-78 c-2 -58 1 -81 12 -92 18 -18 32 -19 42 -3 4 7 3 8 -5 4 -26 -16 -39 14
-39 89 l0 75 57 -2 56 -2 -52 -3 -51 -4 1 -65 c0 -35 4 -60 7 -54 3 5 5 32 4
60 l-1 50 53 0 c30 0 54 -3 55 -7 0 -5 1 -32 2 -61 2 -65 15 -68 20 -5 l3 48
2 -51 c2 -52 -15 -83 -38 -69 -5 3 -10 1 -10 -4 0 -17 32 -13 46 7 7 9 14 39
14 65 0 27 7 60 17 75 l17 27 -24 -24 -24 -24 -23 27 c-23 28 -29 46 -15 46 5
0 17 7 28 15 24 18 17 18 -18 -1z"
              />
              <path
                d="M190 228 c0 -2 9 -11 20 -21 11 -9 20 -13 20 -7 0 5 -9 14 -20 20
-11 6 -20 9 -20 8z"
              />
              <path
                d="M167 203 c-4 -3 -7 -11 -7 -17 0 -6 5 -4 11 4 9 12 10 11 6 -8 -3
-12 -1 -20 4 -16 5 3 9 14 9 25 0 19 -11 25 -23 12z"
              />
              <path
                d="M67 133 c-11 -10 -8 -51 3 -58 6 -3 7 1 4 9 -8 20 5 20 33 1 15 -10
24 -12 28 -5 9 15 -3 60 -16 60 -8 0 -8 -4 0 -13 8 -11 5 -14 -19 -14 -24 0
-27 3 -19 14 11 13 -2 19 -14 6z m53 -33 c8 -5 12 -11 10 -14 -3 -2 -14 2 -24
10 -22 15 -10 19 14 4z"
              />
            </g>
          </svg>
          <div className="sidebar-item" onClick={onVaultClick}>
            <i className="fas fa-university"></i> Vault
          </div>
        </div>
        <div className="icon-flex-main" style={elementStyleFlex}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt"
            height="24.000000pt"
            viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M81 216 c-7 -8 -11 -27 -9 -42 3 -25 6 -27 48 -27 42 0 45 2 48 27 2
15 -2 34 -9 42 -15 18 -63 18 -78 0z m15 -36 c0 -11 -4 -20 -8 -20 -4 0 -8 9
-8 20 0 11 4 20 8 20 4 0 8 -9 8 -20z m34 0 c0 -11 -4 -20 -10 -20 -5 0 -10 9
-10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m30 0 c0 -11 -4 -20 -8 -20 -4 0 -8
9 -8 20 0 11 4 20 8 20 4 0 8 -9 8 -20z"
              />
              <path
                d="M189 156 c-18 -18 -35 -24 -62 -23 -20 0 -41 -3 -47 -9 -6 -6 7 -9
38 -9 26 0 50 5 54 10 4 6 7 -17 6 -50 -1 -47 -2 -51 -5 -19 -3 35 -8 43 -29
47 -13 2 -35 2 -49 -1 -22 -4 -25 -10 -27 -46 -1 -37 -2 -38 -5 -9 -6 48 -33
44 -32 -4 l2 -38 7 35 7 35 2 -32 c2 -51 29 -43 34 10 l4 42 1 -42 c2 -40 4
-43 31 -43 28 0 30 3 34 43 l4 42 1 -42 c1 -31 6 -43 17 -43 11 0 15 14 17 58
l1 57 7 -60 7 -60 1 63 c2 50 -1 62 -14 62 -10 0 -7 7 12 25 15 14 22 25 17
25 -6 0 -21 -11 -34 -24z m-59 -96 c0 -22 -4 -40 -10 -40 -5 0 -10 18 -10 40
0 22 5 40 10 40 6 0 10 -18 10 -40z"
              />
              <path d="M30 100 c-13 -8 -13 -10 2 -10 9 0 20 5 23 10 8 13 -5 13 -25 0z" />
            </g>
          </svg>
          <div className="sidebar-item" onClick={onTradeClick}>
            <i className="fas fa-exchange-alt"></i> Trade
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
