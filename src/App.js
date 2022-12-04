import { Routes, Route, Link } from "react-router-dom"

import Film from "./pages/film";
import Studio from "./pages/studio";
import _404 from "./pages/404";
import Navbar from "./components/navbar";
import Individual from "./pages/individual";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Film/>} />
      <Route path='/studio' element={<Studio/>} />
      <Route path='/individual' element={<Individual/>} />
      <Route path='*' element={<_404/>} />
    </Routes>
    </>
  );
}

export default App;
