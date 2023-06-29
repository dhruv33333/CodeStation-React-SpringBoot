import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);

    if (!userInfo) {
      console.log(
        "No user present in local storage redirecting to login page..."
      );
      history.push("/login");
    }
  }, [history]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
