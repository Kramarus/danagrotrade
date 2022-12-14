import React from "react";
import { BrowserRouter, HashRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Landing from "../Landing/Landing";
import OrderForm from "../OrderForm/OrderForm";
import Thankyou from "../Thankyou/Thankyou";

export default function App(props) {
  // const navigate = useNavigate();
  // <Router basename={`/${process.env.PUBLIC_URL}`}>

  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Navigate to="/en" lang="en" />} />
        
        <Route path="en" element={<Landing lang="en" />} />
        <Route path="en/orderform" element={<OrderForm lang="en" />} />
        <Route path="en/orderform/thankyou" element={<Thankyou lang="en" />} />

        <Route path="de" element={<Landing lang="de" />} />
        <Route path="de/orderform" element={<OrderForm lang="de" />} />
        <Route path="de/orderform/thankyou" element={<Thankyou lang="de" />} />

        <Route path="ua" element={<Landing lang="ua" />} />
        <Route path="ua/orderform" element={<OrderForm lang="ua" />} />
        <Route path="ua/orderform/thankyou" element={<Thankyou lang="ua" />} />

        <Route path="ru" element={<Landing lang="ru" />} />
        <Route path="ru/orderform" element={<OrderForm lang="ru" />} />
        <Route path="ru/orderform/thankyou" element={<Thankyou lang="ru" />} />

        {/* <NotFoundRoute handler={NotFound}/> */}
      </Routes>
    </Router>
  );
}
