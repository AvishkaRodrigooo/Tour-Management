import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import Thankyou from '../pages/Thankyou';
import AdminDashboard from '../pages/AdminDashboard';

import AdminLogin from '../pages/AdminLogin.js';

const Routers = () => {
  return (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home/>} />

    <Route path="/tours/:id" element={<TourDetails/>}/>
    <Route path="/tours" element={<Tours/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/thank-you" element={<Thankyou/>}/>
    <Route path="/about" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/tours/search" element={<SearchResultList/>}/>
  </Routes>
  );
};

export default Routers;
