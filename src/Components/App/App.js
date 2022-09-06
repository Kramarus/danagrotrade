import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Landing/Landing";

export default function App(props) {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing lang="en" />} />
          <Route path="/en" element={<Landing lang="en" />} />
          <Route path="/de" element={<Landing lang="de" />} />
          <Route path="/ua" element={<Landing lang="ua" />} />
          <Route path="/ru" element={<Landing lang="ru" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
