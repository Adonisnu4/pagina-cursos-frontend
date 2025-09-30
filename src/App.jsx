import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarPagina from "./components/NavbarPagina";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <NavbarPagina />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
