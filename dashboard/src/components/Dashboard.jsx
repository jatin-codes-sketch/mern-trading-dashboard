import React from 'react'
import {Routes,Route} from "react-router-dom"
import Funds from "./Funds"
import Apps from "./Apps"
import Holding from "./Holding"
import Orders from "./Orders"
import Positions from "./Positions"
import Summary from "./Summary"
import WatchList from "./WatchList"
const Dashboard = () => {
  return (
   <div className="dashboard-container">
    <WatchList/>
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Summary/>}/>
        <Route exact path="/orders" element={<Orders/>}/>
        <Route exact path="/holdings" element={<Holding/>}/>
        <Route exact path="/positions" element={<Positions/>}/>
        <Route exact path="/funds" element={<Funds/>}/>
        <Route exact path="/apps" element={<Apps/>}/>
      </Routes>
    </div>
   </div>
  )
}

export default Dashboard