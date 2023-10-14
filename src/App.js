import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Index  from './dshboard/programs/Index'; 
import Assignment from './dshboard/programs/Assignment';
function App() {
  return (
   <Router>
      <Routes>
       <Route path="/" element={<Index />} />
       <Route path='/Assignment' element={<Assignment/>}/>
      </Routes>
   </Router>
  );
}

export default App;
