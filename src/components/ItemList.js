
import { CDN_URL } from "../utils/constants"
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList=({items})=>{
  // console.log(items)

  const dispatch=useDispatch();

  const handelAddItem=(item)=>{
    //dispatch an action
   
    dispatch(addItems(item));
  }
  return (
      <div>
      
          {items.map((item)=>

          <div  
          data-testid="foodItems"
           key={item.card.info.id} 
           className="flex justify-between p-2 m-2  border-gray-400 border-b-4 text-left ">
         
          <div className="w-9/12">
            <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
            - ₹ 
                 {item.card.info.price
                 ?item.card.info.price/100
                 :item.card.info.defaultPrice/100}
            </span>
            </div>
            
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
             <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-red-300 text-white shadow-lg"
              onClick={()=>handelAddItem(item)}>
              Add+
              </button>
          </div>
          <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
          </div>
          </div> 
            
          )} 
     
      </div>
  )

}

export default ItemList