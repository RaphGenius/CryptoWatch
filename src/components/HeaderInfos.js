import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
  const [headerData, SetHeaderData] = useState([]);
  console.log(headerData);

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
        <li>Marchés :{headerData.markets && headerData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={headerData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominance :{" "}
          {headerData.market_cap_percentage &&
            headerData.market_cap_percentage.btc.toFixed(2)}{" "}
          %{" "}
        </li>
        <li>
          ETH dominance :{" "}
          {headerData.market_cap_percentage &&
            headerData.market_cap_percentage.eth.toFixed(2)}{" "}
          %{" "}
        </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
