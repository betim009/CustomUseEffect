import { useContext } from "react";
import { Link } from "react-router-dom";
Context;
import { useCart } from "../hooks/useCart";
import Context from "../context/Context";

const data = {
  produto: "Produto A",
  preco: 15.99,
};

export default function Home() {
    const { totalValue } = useContext(Context);
  const { insert, remove } = useCart(data.preco);

  return (
    <>
      <h2>Home Page</h2>
      <Link to="/cart">Cart</Link>
      <p>{data.produto}</p>
      <p>{data.preco}</p>
      <h4>Valor total do carrinho: {totalValue}</h4>
      <button onClick={remove}>-</button>
      <button onClick={insert}>+</button>
    </>
  );
}
