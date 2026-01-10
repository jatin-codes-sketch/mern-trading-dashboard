import { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
} from "@mui/icons-material";

import { watchlist } from "./data/data";
import GeneralContext from "./GeneralContext";

/* =========================
   WatchList
========================= */

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">({watchlist.length})/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

/* =========================
   WatchList Item
========================= */

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

/* =========================
   Action Buttons (BUY / SELL)
========================= */

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      {/* BUY */}
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="buy"
          onClick={() => openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      {/* SELL */}
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="sell"
          onClick={() => openSellWindow(uid)}
        >
          Sell
        </button>
      </Tooltip>

      {/* ANALYTICS */}
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};
