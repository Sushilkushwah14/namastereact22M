const ItemList=({items})=>{
  console.log(items);
  return (
      <div>
      
          {items.map((item)=>
          <div  key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-4 text-left">
            <div className="p-2">
            <span>{item.card.info.name}</span>
            <span>- ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
           
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
            
          )}
     
      </div>
  )

}

export default ItemList