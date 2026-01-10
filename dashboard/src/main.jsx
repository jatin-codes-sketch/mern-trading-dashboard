import { createRoot } from 'react-dom/client'
import { GeneralContextProvider } from './components/GeneralContext.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./components/Home.jsx"

createRoot(document.getElementById('root')).render(
  <GeneralContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
  </BrowserRouter>
  </GeneralContextProvider>
  
)
