import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import SaaSProductLandingPage from "main/LandingPage.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login.js";
import Signup from "pages/Signup";
import FullWidthWithImage from "components/hero/Dashboard";
import BackgroundAsImageWithCenteredContent from "components/hero/Domains";
import BackgroundAsImage from "components/hero/Orders";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<SaaSProductLandingPage />} />
          <Route path="/dashboard" element={<FullWidthWithImage/>} />
          <Route path="/domains" element={<BackgroundAsImageWithCenteredContent/>} />
          <Route path="/order" element={<BackgroundAsImage/>} />
        </Routes>
      </Router>
    </>
  );
}


