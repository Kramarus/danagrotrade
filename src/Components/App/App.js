import React from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";

import Landing from "../Landing/Landing";
import Thankyou from "../Thankyou/Thankyou";

export default function App(props) {
  // const navigate = useNavigate();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing lang="en" />} />
        <Route path="/en" element={<Landing lang="en" />} />
        <Route path="/de" element={<Landing lang="de" />} />
        <Route path="/ua" element={<Landing lang="ua" />} />
        <Route path="/ru" element={<Landing lang="ru" />} />
        {/* <NotFoundRoute handler={NotFound}/> */}
      </Routes>
    </HashRouter>
  );
}
