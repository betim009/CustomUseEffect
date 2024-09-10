import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element />
        <Route path="/cart" element />
      </Routes>
    </>
  );
}
