import { useEffect, useState } from "react";
import axios from "axios";
import "./style/order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Failed to fetch orders", err));
  }, []);

  return (
    <div className="orders-container">
      <h3 className="orders-title">Orders</h3>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan="4" className="orders-empty">
                  No orders placed yet
                </td>
              </tr>
            )}

            {orders.map((order) => (
              <tr key={order._id}>
                <td className="stock-name">{order.name}</td>
                <td>{order.qty}</td>
                <td>₹ {order.price}</td>
                <td>
                  <span
                    className={`order-badge ${
                      order.mode === "BUY" ? "buy" : "sell"
                    }`}
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
