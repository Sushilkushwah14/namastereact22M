import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resdata}=props
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla}=resdata?.info;
      return (
        <div className='m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200'>
        <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="restaurantimg" ></img>
        <h4 className="font-bold py-5 text-xl">{name}</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    )
  
}
export default RestaurantCard;     