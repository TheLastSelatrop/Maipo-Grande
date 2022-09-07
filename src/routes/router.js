
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LogOverLay } from '../Layout/Overlay'
import NavOverLay from '../Layout/Overlay'

import MainPage from '../pages/P_Main'
import LoginPage from '../pages/P_Login'

//import Productores from '../pages/Productores'
//import Transportistas from '../pages/Transportistas'
/*
               <Route path='productores' element={<Productores/>}/>
               <Route path='transportistas' element={<Transportistas/>}/>
*/




const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogOverLay />}>
            <Route index element={<LoginPage/>} />
            </Route>
            <Route element={<NavOverLay />}>
               <Route path='/inicio' element={<MainPage/>}/>
               <Route path='/UserControl' element={<LoginPage/>}/>
               <Route path='/info' element={<LoginPage/>}/>
               <Route path='/contact' element={<LoginPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router