// import {useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useResMenu from "../utils/useResMenu";


// const ResMenu=()=>{

//     // const[resInfo,setresInfo]=useState(null)
     
//     const {resId}=useParams()
//     const resInfo=useResMenu(resId);
    
    
//     // useEffect(()=>{
//     //     fetchMenu();
//     // },[])

// //     const fetchMenu=async () => {
// //             const data=await fetch(MENU_API+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER" );
   
// //     const Menu = await data.json();

// //     console.log(Menu);
// //     setresInfo(Menu.data)
// //   };

//     if(resInfo===null) return <Shimmer/>;

//       const {name,cuisines,costForTwoMessage}=
//             resInfo?.cards[2]?.card?.card?.info;
     
//      const{itemCards}=
//          resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
//          console.log( itemCards);
//         console.log(resInfo);
//         // console.log("hello world");
        
//       return (
        
//         <div className="menu" >
//             <h1>{name}</h1>
//             <p> 
//                <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
//             </p>
        
//             <ul>
//             {itemCards.map((items)=>(
//                 <li key={items.card.info.id}>{items.card.info.name}-{"Rs."}{items.card.info.price/100}</li>
//             ))}

//                 {/* <li>{itemCards[0].card.info.name}</li>
//                 <li>Burger</li>
//                 <li>Diet lassi</li> */}
//             </ul>
//         </div>
//     )
// }

// export default ResMenu;

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Use optional chaining to safely access deeply nested properties
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  console.log(itemCards);
  console.log(resInfo);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
      </p>

      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} - {"Rs."}
            {items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;