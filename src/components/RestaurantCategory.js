
import ItemList  from "./itemList"

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    // console.log(data);

    // const[showItems,setshowItems]=useState(false)

    const handleclick=()=>{
      setShowIndex();
    }

    return( 
    <div>     
        {/* header */}
      <div className=" w-6/12 bg-gray-100 shadow-lg my-4 mx-auto p-4">
       <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
       </div>
        {/* accordion body */}
        {showItems && <ItemList items={data.itemCards}/>}
    
     </div>
  </div>
)}
export default RestaurantCategory