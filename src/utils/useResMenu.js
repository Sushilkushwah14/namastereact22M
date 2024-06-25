import { useEffect, useState } from "react";

import { MENU_API } from "../utils/constants";

const useResMenu=(resId)=>{
  //fetchdata
  const[resInfo,setresInfo]=useState([])

   useEffect(()=>{
   fetchdata();
   },[])

const fetchdata=async ()=>{
   const data=await fetch(MENU_API+ resId) 
   const json=await data.json();

   setresInfo(json.data);
   
   
};
return resInfo;

}
export default useResMenu