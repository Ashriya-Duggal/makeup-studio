import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Book from "./pages/book/Book";
import Login from "./pages/login/Login";

function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PagesRoutes;
