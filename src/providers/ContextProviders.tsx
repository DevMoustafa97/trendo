import { createContext, useState, useContext } from "react";

export const authContext = createContext<any>({});

export const MyContextsHook = () => {
  const [auth, setAuth] = useState({
    token: "",
  });

  const authValue = { auth, setAuth }
  return {
    authValue,
  };
};

export const UseMyContextHook = () => {
  const { auth, setAuth } = useContext(authContext);
  
  return {
    auth,
    setAuth,
  };
};

