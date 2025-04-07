import React from 'react'
import  { useLocation } from "react-router-dom";

const Views = () => {
     let location = useLocation();
    //  console.log(location);
     const hero=location.state;

  return (
    <div>
      <h1 className='text-[2.5rem] text-center'> This is views </h1>
      <div className='bg-blue-950  text-white p-4 flex justify-start'>
        <img src={hero.images.md} alt={hero.name} className="w-[190px] max-w-md m-auto rounded mt-4"
        />
        <h1> Name:  {hero.name}</h1>
        <h1>Slug: {hero.slug}</h1>
       
      </div>
    </div>
  );
}

export default Views
