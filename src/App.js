import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Forms from "./component/Form/Form";
import HomePage from "./component/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
