import { useContext } from "react";
import Context from "../context/Context";

export function useCart(value = 0) {
  const { totalValue, setTotalValue } = useContext(Context);

  const insert = () => {
    setTotalValue((parseFloat(totalValue) + value).toFixed(2));
    console.log(totalValue);
  };
  const remove = () => {
    setTotalValue((parseFloat(totalValue) - value).toFixed(2));
    console.log(totalValue);
  };

  return { insert, remove };
}
