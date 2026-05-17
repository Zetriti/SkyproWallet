import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles.styled";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Expenses from "./pages/Expenses/Expenses";
import { ProtectedRoute } from "./Route/ProtectedRoute";
import Analysis from "./pages/Analysis/Analysis";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/expenses"
            element={
              <ProtectedRoute>
                <Expenses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analysis"
            element={
              <ProtectedRoute>
                <Analysis />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/expenses" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
