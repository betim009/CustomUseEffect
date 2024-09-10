import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element />
        <Route path="/cart" element />
      </Routes>
    </>
  );
}
