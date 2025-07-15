import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Navbar = (props) => {

  
 let inputref=useRef()

  
   
  const handleSeach =(e)=>{ 
    e.preventDefault();  
    let input=inputref.current.value;    
    props.x(input)
  }
  
  return (
    <>
      <nav className=" bg-blue-950 p-2 text-red-900 flex fixed top-0 right-0 left-0 items-center justify-between border border-white z-50">
        <Link to={"/superhero"}>
          <h1 className="text-[2rem] text-white">SuperHero</h1>
        </Link>

        <Link to="/">
          <h1 className="text-[1.6rem] text-white">Home</h1>
        </Link>

        <div className="  w-[300px] flex p-2 justify-between  items-center">
          <div className="flex text-[1.7rem]">
            <FaHeart />
            <sup className="text-white">0</sup>
          </div>
          <div className=" flex items-center rounded-lg bg-white p-1">
            <input
              ref={inputref}
              type="text"
              placeholder="Search"
              className=" outline-none w-[100px] p-1 "
              // onClick={() => {
              //   props.x("");
              // }}
            />
            <button className="bg-white text-white p-2 " onClick={handleSeach}>
              <CiSearch className="text-black" />
            </button>
          </div>
          <Link to={"/login"}>
            <button className="bg-blue-800 p-2 text-white rounded-lg hover:bg-blue-600 ">
              Login
            </button>
          </Link>
          <Link to={"/redux"}>redux</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar



// onClick={()=>{props.x('')}}g