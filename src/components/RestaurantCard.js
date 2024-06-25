import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resdata}=props
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla}=resdata?.info;
      return (
        <div className='m-0 p-4 w-[210px] rounded-lg bg-gray-100 hover:bg-gray-200'>
        <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="restaurantimg" ></img>
        <h4 className="font-bold py-5 text-xl">{name}</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    )
  
}
// higher order function/component 
//input->Restaurantcard=>Restaurantcard->open
export const isopen=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-yellow-200 m-4 p-[3px] rounded-e-lg text-black">
        open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;     