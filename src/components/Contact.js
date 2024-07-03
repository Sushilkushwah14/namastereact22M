
const Contact=()=>{
    return(
        <div>
          <h1 className="font-bold text-3xl p-4 m-4">contact us page</h1>
          <form>
            <input 
            className="border border-black m-2 p-2"
             type="text" placeholder="name" ></input>
            <input 
            className="border border-black m-2 p-2"
            type="text" placeholder="message"></input>
            <button className="border border-black rounded-xl bg-slate-300 m-2 p-2">Submit</button>
          </form> 
        </div>
    )
}
export default Contact