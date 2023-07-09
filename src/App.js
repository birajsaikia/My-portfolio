import React from "react";
import Navber from './Component/Navber'
import Home from './Component/Home'
import Education from './Component/Educetion'
import Contect from './Component/Contect'
import Tech from './Component/Tech'
import Work from './Component/Work'
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App(){

    return( 
    <>
    <BrowserRouter>
        <Navber/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/education" element={<Education/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/work" element={<Work/>}/>
        </Routes>
    </BrowserRouter>     
    </>
    );
}

export default App;