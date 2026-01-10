import { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedUID, setSelectedUID] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);


  const openBuyWindow = (uid) => {
    setSelectedUID(uid);
    setIsBuyOpen(true);
  };

  const openSellWindow = (uid) => {
    setSelectedUID(uid);
    setIsSellOpen(true);
  };

  const closeAll = () => {
    setIsBuyOpen(false);
    setIsSellOpen(false);
    setSelectedUID("");
  };

  const triggerRefresh = () => {
  setRefreshKey(prev => prev + 1);
};


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        openSellWindow,
        closeAll,
        refreshKey,
        triggerRefresh
      }}
    >
      {children}

      {isBuyOpen && <BuyActionWindow uid={selectedUID} />}
      {isSellOpen && <SellActionWindow uid={selectedUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
