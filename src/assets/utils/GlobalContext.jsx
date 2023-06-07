import { useState, createContext } from "react";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({});

  const addProperty = (key, value) => {
    setGlobalData((prevData) => ({ ...prevData, [key]: value }));
  };

  const removeProperty = (key) => {
    const { [key]: deletedData, ...restData } = globalData;
    setGlobalData(restData);
  };

  const getProperty = (key) => {
    return globalData[key];
  };

  return (
    <GlobalContext.Provider
      value={{ addProperty, removeProperty, getProperty }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
