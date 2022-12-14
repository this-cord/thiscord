import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ModalPage from "../components/Main/ModalPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignPage from "../pages/SignPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
