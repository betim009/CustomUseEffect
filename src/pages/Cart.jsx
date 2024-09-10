import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

export default function Cart() {
  const { totalValue } = useContext(Context);
  return (
    <>
      <Link to="/">Home</Link>
      <h2>Carrinho</h2>
      <p>{totalValue}</p>
    </>
  );
}
