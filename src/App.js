import React from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../src/App.css"
import Home from "./Home";  
import DataVeiw from "./dataVeiw";
import Output from "./output";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/data" element={<DataVeiw />} />
          <Route path="/upload" element={<Output />} />
      </Routes>
      </BrowserRouter>
   )
}

export default App;