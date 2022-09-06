import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Landing from "../Landing/Landing";

export default function App(props) {
  return (
    <>
 
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing lang="en" />} />
          <Route path="/en" element={<Landing lang="en" />} />
          <Route path="/de" element={<Landing lang="de" />} />
          <Route path="/ua" element={<Landing lang="ua" />} />
          <Route path="/ru" element={<Landing lang="ru" />} />
          {/* <Route path="/*" element={<Page404 lang="en" />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}
