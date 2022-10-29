import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignPage from "../pages/SignPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
