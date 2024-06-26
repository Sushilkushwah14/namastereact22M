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


import RestaurantCard,{isopen} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable-super powerful variable
  const [listOfRestaurent, setRestaurent] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setsearchText] = useState([]);
  
   const RestaurantCardisOpen=isopen(RestaurantCard);
  console.log(listOfRestaurent);

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
  // }
  //by using tertory operator

  const onlinestatus=useOnlineStatus();
  if(onlinestatus==false) return (<h1>looks like you are offline! please chech your internet</h1>)
  
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex border border-solid border-black px-2">
        <div className="search m-4 p-4  ">
          <input
            type="Text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          {/* <div  className="search m-4 p-4 flex items-center"> */}
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              //filter the reataurant and update the restaurant
              //
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
          className="px-5 py-2 my-12 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredlist = listOfRestaurent.filter(
              (res) => res?.info?.avgRatingString > "4"
            ); /************** */
            setRestaurent(filteredlist);
          }}
        >
          Top Rated Restaurents
        </button>
        </div>
      {/* </div> */}
      <div className="flex flex-wrap ">
        {filteredRestraunts.map((restaurent) => {
          {
            /* console.log(restaurent) */
          }
          return (
            <Link
            key={restaurent.info.id}
             to={"/restaurants/"+restaurent.info?.id}
              >
              {/* if restaurant is open than show open otherwise close */
              restaurent.info.isOpen?(
                <RestaurantCardisOpen resdata={restaurent} />
                ):(
                <RestaurantCard  resdata={restaurent} />
                )
              }
                
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;