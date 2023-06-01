import React, { useState, createContext } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [contextList, setContextList] = useState({});

  const addAppContext = (context) => {
    setContextList((prevContextList) => ({
      ...prevContextList,
      ...context,
    }));
  };

  const getAppContext = (contextName) => {
    return contextList;
  };

  const removeAppContext = (contextName) => {
    console.log(contextName);
    setContextList((prevContextList) => {
      const { [contextName]: removed, ...filteredList } = prevContextList;
      return filteredList;
    });
  };

  return (
    <AppContext.Provider
      value={{ addAppContext, getAppContext, removeAppContext }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
