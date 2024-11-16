import { createContext } from "react";

const loginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default loginContext;
