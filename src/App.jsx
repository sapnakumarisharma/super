import './App.css'
import Home from './Pages/Home'
import Views from './Pages/Views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SuperHero from './Pages/SuperHero'
import Login from './Pages/Login'
import FavHeroes from './Pages/FavHeroes'
import { useState } from 'react'
import Redux from './Pages/Redux'

function App() {
  const [get, setget] = useState();
 function getData(ans){
  setget(ans)
  console.log(ans);
  
 }

  return (
    <>
      <BrowserRouter>
      <Navbar x={getData} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/superhero" element={<SuperHero ans={get}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/views" element={<Views/>} />
          <Route path="/favhero" element={<FavHeroes/>}/>
          <Route path="/redux" element={<Redux/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
