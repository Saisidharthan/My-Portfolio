import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Experience from "./Pages/Experience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Aboutme' element={<About/>}/>
          <Route path='/Contactme' element={<ContactMe/>}/>
          <Route path='/Experience' element={<Experience/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
