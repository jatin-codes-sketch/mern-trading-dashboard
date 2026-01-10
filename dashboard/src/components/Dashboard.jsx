import { Routes, Route } from "react-router-dom";
import Apps from "./Apps";
import Holding from "./Holding";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import TopBar from "./TopBar";
import "./style/dashboard.css"
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList />
      <TopBar />


      <div className="content">
        <Routes>
          {/* Default dashboard route */}
          <Route index element={<Summary/>} />

          {/* Relative paths (VERY IMPORTANT) */}
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holding />} />
          <Route path="positions" element={<Positions />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
