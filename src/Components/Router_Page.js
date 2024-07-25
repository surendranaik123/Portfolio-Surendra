import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';

function Router_Page() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router_Page