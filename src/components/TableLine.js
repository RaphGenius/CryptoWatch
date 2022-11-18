import React from "react";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";

const TableLine = ({ coin, index }) => {
  // Permet
  const priceFormater = (price) => {
    //Transformation du chiffre en string, on ne peut connaitre la longueur d'un numb
    if (Math.round(price).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(price);
    } else return price;
  };

  const mktCapFormater = (numb) => {
    let newNum = String(numb).split("").slice(0, -6); //Slice -6 pour enlever les 6 derniers elements du tableau
    return Number(newNum.join(""));
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1} </p>
        <div className="img">
          <img src={coin.image} height="20" alt="logo" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name} </h4>
          <span>- {coin.symbol.toUpperCase()} </span>
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(" ", "-")
              .replace(" ", "-")
              .replace(" ", "-")}`}
          >
            <img src="./assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormater(coin.market_cap).toLocaleString()} M${" "}
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $ </p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;
