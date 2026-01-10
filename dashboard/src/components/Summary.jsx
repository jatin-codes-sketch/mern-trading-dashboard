import "./Summary.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import PortfolioChart from "./PortfolioChart";
import PortfolioDonutChart from "./PortfolioDonutChart";
import GeneralContext from "./GeneralContext";



const Summary = () => {
  
  const [summary, setSummary] = useState(null);
  const [allocation, setAllocation] = useState([]);
  const { refreshKey } = useContext(GeneralContext);

  useEffect(() => {
  axios
    .get("http://localhost:5000/summary")
    .then(res => setSummary(res.data))
    .catch(err => console.log(err));
}, [refreshKey]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/portfolio-allocation")
    .then(res => setAllocation(res.data))
    .catch(err => console.log(err));
}, []);




  return (
  <div className="summary-page">
    <div className="summary-container">

      {/* Header */}
      <h1 className="greeting">Hi, Zerodha</h1>

      {/* Equity & Commodity (unchanged – still static for now) */}
      <div className="balance-section">
        {/* Equity */}
        <div className="balance-card">
          <div className="card-header">
            <span className="icon">🕒</span>
            <span>Equity</span>
          </div>

          <div className="card-body">
            <div className="main-value">
              10.36L
              <span className="label">Available balance</span>
            </div>

            <div className="meta">
              <div>
                <span>Margins used</span>
                <strong>-274.35</strong>
              </div>
              <div>
                <span>Account value</span>
                <strong>10.35L</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity */}
        <div className="balance-card">
          <div className="card-header">
            <span className="icon">💧</span>
            <span>Commodity</span>
          </div>

          <div className="card-body">
            <div className="main-value">
              89.76k
              <span className="label">Available balance</span>
            </div>

            <div className="meta">
              <div>
                <span>Margins used</span>
                <strong>1.14L</strong>
              </div>
              <div>
                <span>Account value</span>
                <strong>2.04L</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Holdings */}
      <div className="holdings-section">
        <div className="holdings-header">
          <span className="icon">📦</span>
          <span>Holdings</span>
        </div>

        {summary ? (
          <div className="holdings-body">
            <div className="pnl">
              <span
                className={`pnl-value ${
                  Number(summary.pnl) >= 0 ? "positive" : "negative"
                }`}
              >
                ₹ {summary.pnl}
              </span>
              <span className="pnl-percent">
                {Number(summary.pnl) >= 0 ? "+" : ""}
                {summary.pnlPercent}%
              </span>
              <span className="pnl-label">P&amp;L</span>
            </div>

            <div className="holdings-meta">
              <div>
                <span>Current value</span>
                <strong>₹ {summary.currentValue}</strong>
              </div>
              <div>
                <span>Investment</span>
                <strong>₹ {summary.investment}</strong>
              </div>
            </div>
          </div>
        ) : (
          <div className="holdings-body">
            <p>Loading summary...</p>
          </div>
        )}
      </div>
      {summary && (
  <div style={{ marginTop: "32px" }}>
    <PortfolioChart
      investment={Number(summary.investment)}
      currentValue={Number(summary.currentValue)}
    />
  </div>
)}
{allocation.length > 0 && (
  <div style={{ marginTop: "32px" }}>
    <h3>Portfolio Allocation</h3>
    <PortfolioDonutChart data={allocation} />
  </div>
)}



    </div>
  </div>
);

};

export default Summary;
