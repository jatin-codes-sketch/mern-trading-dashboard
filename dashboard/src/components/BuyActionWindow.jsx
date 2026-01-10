import { useState, useContext } from "react";
import axios from "axios";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeAll, triggerRefresh } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleBuyClick = async () => {
    if (!stockQuantity || !stockPrice) return;

    await axios.post("http://localhost:5000/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
    });

    triggerRefresh();
    closeAll();

  };

  return (
    <>
      {/* Backdrop */}
      <div className="kite-backdrop" onClick={closeAll}></div>

      {/* Center Modal */}
      <div className="kite-container">
        <div className="kite-header">
          <h3>Buy {uid}</h3>
          <span className="kite-close" onClick={closeAll}>
            ✕
          </span>
        </div>

        <div className="kite-body">
          <div className="kite-inputs">
            <div className="kite-field">
              <label>Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </div>

            <div className="kite-field">
              <label>Price</label>
              <input
                type="number"
                step="any"
                placeholder="Enter price"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="kite-footer">
          <span>Margin required ₹140.65</span>
          <div>
            <button
              className="kite-btn kite-buy"
              onClick={handleBuyClick}
              disabled={!stockQuantity || !stockPrice}
            >
              Buy
            </button>

            <button
              className="kite-btn kite-cancel"
              onClick={closeAll}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyActionWindow;
