import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function AllRoute() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>} />
       
      </Routes>
    </div>
  )
}

export default AllRoute;