import { useState, useEffect,useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";


const Holding = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { refreshKey } = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch holdings", err);
      });
  }, [refreshKey]);


  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment
    ? (pnl / totalInvestment) * 100
    : 0;

  const pnlClass = pnl >= 0 ? "profit" : "loss";


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const rowPnl = curValue - stock.avg * stock.qty;
              const isProfit = rowPnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{rowPnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  
  {/* Total Investment */}
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <h5 className="text-lg font-semibold text-gray-900">
      ₹
      {totalInvestment.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}
    </h5>
    <p className="text-sm text-gray-500 mt-1">Total investment</p>
  </div>

  {/* Current Value */}
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <h5 className="text-lg font-semibold text-gray-900">
      ₹
      {currentValue.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}
    </h5>
    <p className="text-sm text-gray-500 mt-1">Current value</p>
  </div>

  {/* P&L */}
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <h5 className={`text-lg font-semibold ${pnlClass}`}>
      ₹
      {pnl.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}{" "}
      <span className="text-sm font-medium">
        ({pnlPercent.toFixed(2)}%)
      </span>
    </h5>
    <p className="text-sm text-gray-500 mt-1">P&amp;L</p>
  </div>

</div>

    </>
  );
};

export default Holding;
