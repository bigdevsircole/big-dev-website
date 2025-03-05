import PropTypes from "prop-types";
import { useContext, useState, createContext } from "react";

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((c) => c + 1);
  };

  return (
    <GlobalContext.Provider value={{ count, setCount, handleIncrease }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;