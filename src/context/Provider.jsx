import { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  const contextValue = {
    totalValue,
    setTotalValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
