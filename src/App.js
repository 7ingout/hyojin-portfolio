import './App.css';
import Main from './Main';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Main/>} />
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Skill" element={<Skills/>}/>
        <Route path= "/Project" element={<Project/>}/>
      </Routes>
    </div>
  );
}

export default App;
