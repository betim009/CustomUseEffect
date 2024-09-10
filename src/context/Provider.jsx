import { useState, useEffect } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const valueLS = localStorage.getItem("valorTotal", totalValue);
    if (valueLS) {
      setTotalValue(valueLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("valorTotal", totalValue);
  }, [totalValue]);

  const contextValue = {
    totalValue,
    setTotalValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
