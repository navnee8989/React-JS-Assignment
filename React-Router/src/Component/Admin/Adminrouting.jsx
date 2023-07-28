import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Admin from "./Admin"
import Adminmenu from './Adminmenu';
import Adminedit from './Adminedit';
import Admindashboard from './Admindashboard';

const Adminrouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Adminmenu />}>
          <Route path="Admin" element={<Admin />} />
          <Route path="Adminedit" element={<Adminedit />} />
          <Route path="Admindashboard" element={<Admindashboard />} />
        </Route>
      </Routes>
   
    </>
  );
};

export default Adminrouting;
