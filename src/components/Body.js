// import RestaurantCard from "./RestaurantCard"
// import { useState,useEffect } from "react"
// import Shimmer from "./Shimmer"
// import resobj from "../utils/mockData"
// const Body=()=>{
//     const[listOfRestraunt,setlistOfRestraunt]=useState([])
//     const [searchText,setsearchText]=useState([])
//     useEffect(()=>{
//         fetchdata();
//     },[])
//     const fetchdata=async ()=>{
//         const response= await fetch("api")
//     }
//     const Json= await response.json()
//     setlistOfRestraunt(json.)
    
//     return listOfRestraunt.length==[]?
//     (<Shimmer/>)
//     :(
//         <div className='body'> 
//             <div className="filter">
//             <div className="search">
//                 <input type="text" className="search-box" value={searchText} onChange={(e)=>{
//                     setsearchText(e.target.value)
//                 }}>
//                     <button onClick={()=>{
//                         const searchtextlower=searchText.toLower()
//                         const filteredres=listOfRestraunt.filter((restaurants)=>{
//                             restaurants.info.data.name.toLower().includes(searchtextlower)
//                         })
//                          }}>search
//                     </button>
//                 </input>
//             </div>
//                 <button className="filter-btn" onClick={()=>{
//                            const filteredobj= listOfRestaurant.filter((res)=>info.avgRating>4)
//                             }}
//                      setlistOfRestaurant(filteredobj);
//                     >Top rated restaurants
//                 </button>
//             </div>
//         </div>
//         <div className='res-container'>
//           {
//              filteredRestaurants.map((restaurant)=>(
//             <RestaurantCard key={restaurant.info.id} resdata={restaurant}/>
//            ))
//         }
//         </div>
//         </div>
//     )
// }
// export default Body


import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable-super powerful variable
  const [listOfRestaurent, setRestaurent] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setsearchText] = useState([]);


  useEffect(() => {
    fetchData();
    //unmounting when we leave the page
    // return ()=>{
    // fetchData();
    // }
  }, []);

  const fetchData = async () => {
    //await is always used inside async
    const response = await fetch(
      //fetch() always return promise
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const Json = await response.json();
   
    setRestaurent(
      Json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      Json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(Json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //conditional rendering
  // if (listOfRestaurent.length==[])
  // {
  //   return  <Shimmer/>
  // }c
  //by using tertory operator
  return listOfRestaurent.length == [] ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="Text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchTextLower = searchText.toLowerCase();
              const filteredRestaurants = listOfRestaurent.filter(
                (restaurant) =>
                  restaurant.info.name.toLowerCase().includes(searchTextLower)
              );

              setFilteredRestraunts(filteredRestaurants);
            }
            }
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredObj = listOfRestaurent.filter(
              (res) => res?.info?.avgRating> 4
            ); /************** */
            setRestaurent(filteredObj);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunts.map((restaurent) => {
          {
            /* console.log(restaurent) */
          }
          return (
            <Link
            key={restaurent.info.id}
             to={"/restaurants/"+restaurent.info.id}
              >
                 <RestaurantCard  resdata={restaurent} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;