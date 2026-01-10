import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="orders-page">
      <h2 className="orders-title">Orders</h2>

      <div className="orders-card">
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
                <td colSpan="4" className="empty">
                  No orders placed yet
                </td>
              </tr>
            )}

            {orders.map((order) => (
              <tr key={order._id}>
                <td className="stock">{order.name}</td>
                <td>{order.qty}</td>
                <td>₹ {order.price}</td>
                <td>
                  <span
                    className={`badge ${
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
