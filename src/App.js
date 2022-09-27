import './App.css';
import Main from './Main';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Archiving from './components/Archiving';
import Career from './components/Career';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Main/>} />
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Skill" element={<Skills/>}/>
        <Route path= "/Archiving" element={<Archiving/>}/>
        <Route path= "/Project" element={<Project/>}/>
        <Route path= "/Career" element={<Career/>}/>
      </Routes>
    </div>
  );
}

export default App;