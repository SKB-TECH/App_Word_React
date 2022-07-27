import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        {/* En cas de non reconnaissance d'url */}
        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
