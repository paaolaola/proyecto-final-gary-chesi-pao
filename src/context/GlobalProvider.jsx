import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const state = { data, setData, favorites, setFavorites };

  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
