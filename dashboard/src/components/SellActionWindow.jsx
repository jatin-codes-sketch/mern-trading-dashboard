import { useState, useContext } from "react";
import axios from "axios";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const { closeAll, triggerRefresh } = useContext(GeneralContext);
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const handleSell = async () => {
    try {
      await axios.post("http://localhost:5000/newOrder", {
      name: uid,
      qty: Number(qty),
      price: Number(price),
      mode: "SELL",
    });

    triggerRefresh();
    closeAll();

    } catch (error) {
      console.log("Error",error);
    }
  };

  return (
    <>
      <div className="kite-backdrop" onClick={closeAll} />

      <div className="kite-container">
        <div className="kite-header red">
          <h3>Sell {uid}</h3>
          <span onClick={closeAll}>✕</span>
        </div>

        <div className="kite-body">
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="kite-footer">
          <button className="sell-btn" onClick={handleSell}>
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default SellActionWindow;
