import React from 'react'
import { Route, Routes, useLocation} from "react-router-dom";
import AddEmployee from './AddEmployee';
import Detail from './Detail';
import HomePage from './HomePage';
import ShowEmoloyee from './ShowEmoloyee';
import UpdateEmployee from './UpdateEmployee';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoute() {
    const location = useLocation()

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<HomePage />} />
    <Route path="/employee" element={<ShowEmoloyee />} />
    <Route path="/addemp" element={<AddEmployee />} />
    <Route path="/:id/" element={<Detail/>}/>
    <Route path="/:id/update" element={<UpdateEmployee/>}/>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoute