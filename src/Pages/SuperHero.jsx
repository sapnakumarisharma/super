import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { FaRegEye } from "react-icons/fa";

const SuperHero = (props) => {
  console.log(props.ans);

  const [all, setAll] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const getData = async () => {
    let res = await fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
    );
    let data = await res.json();
    setAll(data);
  };

  useEffect(() => {
  
    getData();
  }, []);
 let filterArr = all.filter(
   (ele) =>
     ele.name.toLowerCase().includes(props.ans?.toLowerCase() || "") ||
     ele.biography.fullName
       .toLowerCase()
       .includes(props.ans?.toLowerCase() || "")
 );


    console.log(filterArr);

  const showModal = (obj) => {
    setSelectedItem(obj);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-[100px] p-4 text-white">
        {filterArr.map((hero) => (
          <div key={hero.id} className="p-4 rounded-lg relative">
            <img
              src={hero.images.md}
              alt={hero.name}
              className="w-full rounded md:h-[350px]"
            />
            <FaRegEye
              onClick={() => showModal(hero)}
              className="absolute top-4 right-5 cursor-pointer"
              color="yellow"
              size={"30px"}
            />
            <h3 className="text-lg mt-2">{hero.name}</h3>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          title="SuperHero Details"
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
        >
          <button className="w-full bg-red-200 p-2 text-[1.2rem]">
            Appearance
          </button>
          <p>Name: {selectedItem.name}</p>
          <p>Full Name: {selectedItem?.biography?.fullName || "N/A"}</p>
          <p>Gender: {selectedItem?.appearance?.gender || "N/A"}</p>
          <p>Height: {selectedItem?.appearance?.height?.[1] || "N/A"}</p>
          <p>Weight: {selectedItem?.appearance?.weight?.[1] || "N/A"}</p>
          <p>Race: {selectedItem?.appearance?.race || "N/A"}</p>
          <p>Eye Color: {selectedItem?.appearance?.eyeColor || "N/A"}</p>

          <button className="w-full bg-red-200 p-2 text-[1.2rem]">
            Biography
          </button>
          <p>Aliases: {selectedItem?.biography?.aliases?.[0] || "N/A"}</p>
          <p>Alignment: {selectedItem?.biography?.alignment || "N/A"}</p>
          <p>Alter Egos: {selectedItem?.biography?.alterEgos || "N/A"}</p>
          <p>
            First Appearance:{" "}
            {selectedItem?.biography?.firstAppearance || "N/A"}
          </p>
          <p>
            Place of Birth: {selectedItem?.biography?.placeOfBirth || "N/A"}
          </p>
          <p>Publisher: {selectedItem?.biography?.publisher || "N/A"}</p>

          <button className="w-full bg-red-200 p-2 text-[1.2rem]">
            Connections
          </button>
          <p>
            Group Affiliation:{" "}
            {selectedItem?.connections?.groupAffiliation || "N/A"}
          </p>
          <p>Relatives: {selectedItem?.connections?.relatives || "N/A"}</p>

          <Link to={"/favhero"}>
            <button className="bg-green-600 p-2 text-white w-full rounded-lg mt-3">
              Add to Fav
            </button>
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default SuperHero;

































































































//demijon




//import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaRegEye } from "react-icons/fa";

// import { Button, Modal } from "antd";

// const Home = (props) => {
//   // console.log(props.searchValue);

//   const [allData, setallData] = useState([]);
//   const [showItems, setshowItems] = useState("");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = (obj, i) => {
//     console.log(obj);
//     setshowItems(obj);
//     setIsModalOpen(true);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   async function getData() {
//     let res = await fetch(
//       "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
//     );
//     let data = await res.json();
//     console.log(data);
//     setallData(data);
//   }
//   useEffect(() => {
//     getData();
//   }, []);

//                              // to search the data
//   let filterArr = allData.filter(
//     (ele) =>
//       ele.name.toLowerCase().includes(props.searchValue.toLowerCase()) ||
//       ele.biography.fullName
//         .toLowerCase()
//         .includes(props.searchValue.toLowerCase())
//   );
//   console.log(filterArr);

//   return (
//     <div className="bg-black w-[100%] h-[100%]">
//       <div className="mx-auto  px-1 py-1 sm:px-3 sm:py-2 lg:max-w-7xl lg:px-8 ">
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2 ">
//           {filterArr.map((ele, i) => {
//             return (
//               <div state={ele} className="relative" key={i}>
//                 <FaRegEye
//                   onClick={() => showModal(ele, i)}
//                   size={30}
//                   color="yellow"
//                   className=" absolute top-2 right-2"
//                 />

//                 <img
//                   src={ele.images.sm}
//                   alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//                   className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
//                 />
//                 <h2 className="mt-4 text-sm font-bold text-white text-center">
//                   {ele.name}
//                 </h2>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <Modal
//         title="Superheros Details"
//         open={isModalOpen}
//         okButtonProps={{ style: { display: "none" } }}
//         onCancel={handleCancel}
//         className="text-bold">
//         <div className="flex flex-col gap-3">
//           <h1 className="text-center my-2 text-xl bg-gray-400 rounded-md">
//             Appearance
//           </h1>
//           <p>
//             <b>Name:</b> {showItems.name}
//           </p>
//           <p>
//             <b>EyeColor: </b>
//             {showItems?.appearance?.eyeColor}
//           </p>
//           <p>
//             <b>Gender: </b>
//             {showItems?.appearance?.gender}
//           </p>
//           <p>
//             <b>HairColor: </b>
//             {showItems?.appearance?.hairColor}
//           </p>
//           <p>
//             <b>Height:</b> {showItems?.appearance?.height[1]}
//           </p>
//           <p>
//             <b>Weight:</b> {showItems?.appearance?.weight[1]}
//           </p>
//           <p>
//             <b>Publisher: </b>
//             {showItems?.biography?.publisher}
//           </p>
//         </div>

//         <div className="flex flex-col gap-3">
//           <h1 className="text-center my-2 text-xl bg-gray-400 rounded-md">
//             Biography
//           </h1>
//           <p>
//             <b>Aliases</b>
//           </p>
//           <ul>
//             <b>Alignment</b>
//             <li> Alterego: {showItems?.biography?.alterEgos}</li>
//             <li> FirstApperance: {showItems?.biography?.firstAppearance}</li>
//             <li> Fullname: {showItems?.biography?.fullName}</li>
//             <li> Place of Birth: {showItems?.biography?.placeOfBirth}</li>
//           </ul>
//           <div className="flex flex-col gap-3">
//             <h1 className="text-center my-2 text-xl bg-gray-400 rounded-md">
//               Connections
//             </h1>
//             <p>
//               <b>GroupAffilation: </b>
//               {showItems?.connections?.groupAffiliation}
//             </p>
//             <p>
//               <b>Relatives: </b>
//               {showItems?.connections?.relatives}
//             </p>
//           </div>
//           <div className="flex flex-col gap-3">
//             <h1 className="text-center my-2 text-xl bg-gray-400 rounded-md">
//               Powerstats
//             </h1>
//             <p>
//               <b>Durability: </b>
//               {showItems?.powerstats?.durability}
//             </p>
//             <p>
//               <b>Intelligence: </b>
//               {showItems?.powerstats?.intelligence}
//             </p>
//             <p>
//               <b>Combat: </b>
//               {showItems?.powerstats?.combat}
//             </p>
//             <p>
//               <b>Power: </b>
//               {showItems?.powerstats?.power}
//             </p>
//             <p>
//               <b>Speed: </b>
//               {showItems?.powerstats?.speed}
//             </p>
//             <p>
//               <b>Strength: </b>
//               {showItems?.powerstats?.strength}
//             </p>
//           </div>
//           <div className="flex flex-col gap-3">
//             <h1 className="text-center my-2 text-xl bg-gray-400 rounded-md">
//               Works
//             </h1>
//             <p>
//               <b>Occupation: </b>
//               {showItems?.work?.occupation}
//             </p>
//           </div>

//           <button className="bg-green-600 rounded-md text-white px-4 py-2">
//             Add To Fav
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Home;








//import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Modal } from "antd";
// import { FaRegEye } from "react-icons/fa";


// const SuperHero = (props) => {
//   // console.log(props.ans);
//   // let filter=props.ans;

  
//   const [all, setAll] = useState([]);
//   const [filteredHeroes, setFilteredHeroes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [setitem, setsetitem] = useState("");
 
//   const showModal = (obj) => {
//     setsetitem(obj);
//     console.log(obj);
    
//     setIsModalOpen(true);
//   };

//   const handleOk = () => setIsModalOpen(false);
//   const handleCancel = () => setIsModalOpen(false);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         let res = await fetch(
//           "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
//         );
//         let data = await res.json();
//         setAll(data);
//         setFilteredHeroes(data); // Set filtered list initially
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getData();
//   }, []);

//   // Handle search when Enter is pressed
//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       const filtered = all.filter((hero) =>
//         hero.name.toLowerCase().includes(search.toLowerCase())
//       );
//       setFilteredHeroes(filtered);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search Superhero..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={handleSearch} // Trigger search on Enter
//         className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//       />

//       <div className="text-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-4">
//         {filteredHeroes.map((ele, i) => (
//           <div key={ele.id} className="p-4 rounded-lg relative">
//             <img
//               src={ele.images.md}
//               alt={ele.name}
//               className="w-full rounded md:h-[350px]"
//             />
//             <FaRegEye
//               onClick={() => showModal(ele)}
//               className="absolute top-4 right-5 cursor-pointer"
//               color="yellow"
//               size={"30px"}
//             />
//             <h3 className="text-lg mt-2">{ele.name}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Superhero Details */}
//       <Modal
//       onButtonProps={{style:{diplay:'none'}}}
//         title="SuperHero Details"
//         open={isModalOpen}
//         // onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <button className="w-full bg bg-red-200 p-2 text-[1.2rem]">
//           Appearance
//         </button>
//         <p>Name: {setitem.name}</p>
//         <p>Full Name: {setitem?.biography?.fullName}</p>
//         <p>Gender: {setitem?.appearance?.gender}</p>
//         <p>Height: {setitem?.appearance?.height?.[1]}</p>
//         <p>Weight: {setitem?.appearance?.weight?.[1]}</p>
//         <p>Race: {setitem?.appearance?.race}</p>
//         <p>Eye Color: {setitem?.appearance?.eyeColor}</p>
//         <button className="w-full bg bg-red-200 p-2 text-[1.2rem]">
//           Biography
//         </button>
//         <p>aliases: {setitem?.biography?.aliases[0]}</p>
//         <p>alignment: {setitem?.biography?.alignment}</p>
//         <p>alterEgos : {setitem?.biography?.alterEgos}</p>
//         <p>firstAppearance : {setitem?.biography?.firstAppearance}</p>
//         <p>fullName : {setitem?.biography?.fullName}</p>
//         <p>placeOfBirth : {setitem?.biography?.placeOfBirth}</p>
//         <p>publisher : {setitem?.biography?.publisher}</p>
//         <button className="w-full bg bg-red-200 p-2 text-[1.2rem]">
//           Connections
//         </button>
//         <p>groupAffiliation : {setitem?.connections?.groupAffiliation}</p>
//         <p>relatives : {setitem?.connections?.relatives}</p>

//         <Link to={"/favhero"}>
//           <button className="bg-green-600 p-2 text-white w-full rounded-lg mt-3">
//             Add to Fav
//           </button>
//         </Link>
//       </Modal>
//     </div>
//   );
// };

// export default SuperHero;
