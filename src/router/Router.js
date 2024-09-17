import React from 'react'
import { Routes , Route } from 'react-router';
import Homepage from '../pages/Homepage';


const Router = () => {

  return (
 
 <Routes>
	<Route path="/" element={<Homepage />} />
 </Routes>
  
 
  )
}

export default Router