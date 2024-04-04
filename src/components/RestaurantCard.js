import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resdata}=props
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla}=resdata?.info;
      return (
        <div className='res-card'>
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="restaurantimg" ></img>
        <h4>{name}</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    )
  
}
export default RestaurantCard;     