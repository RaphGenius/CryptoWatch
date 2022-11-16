import axios from "axios";
import React, { useEffect, useState } from "react";

const HeaderInfos = () => {
  const [headerData, SetHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => SetHeaderData(res.data.data));
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="Logo" />
            Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies :
          {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies.toLocaleString()}
        </li>
      </ul>
    </div>
  );
};

export default HeaderInfos;
