import React from "react";
import { Navbar, Footer } from "./resusable-components/resusable-components-exporter";
import { Addrequest, Addservice, Home } from "./features/features-exporter";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="app-cont">
      <div className="app">

        <Navbar />
        <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addservice' element={<Addservice/>}/>
    <Route path='/addrequest' element={<Addrequest/>}/>
    </Routes>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;