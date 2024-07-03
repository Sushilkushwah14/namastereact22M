import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
 
global.fetch=jest.fn(()=>{//dummy fetch data
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should search restaurant list fot pizza  texted in search bar ", async ()=>{
 
    await act  (async()=>//when we use fetch or state updated we 
//should wrapp into the act fun,it takes async fn inside the async fn here 
//we are updating state Restaurant cards into <Body/>
  
    render(
        <BrowserRouter>
      <Body/>
        </BrowserRouter>
      )

)

const cards=screen.getAllByTestId("rescardsid")

expect(cards).toHaveLength(20);

const searchBtn=screen.getByRole("button",{name:"Search"})

const searchinput=screen.getByTestId("searchInput")

fireEvent.change(searchinput,{target:{value:"pizza"}})//target is dummy 'e'

 fireEvent.click(searchBtn)

 const cardsAfterSearch=screen.getAllByTestId("rescardsid")

 expect(cardsAfterSearch).toHaveLength(3);
// cardsburger.forEach(card => {
//   expect(card.length).not.toBe(1); // Check if each input box is in the document
// });


 })

 it("should filter top rated restaurant list more than 4.3 are  ", async ()=>{
 
    await act  (async()=>//when we use fetch or state updated we 
//should wrapp into the act fun,it takes async fn inside the async fn here 
//we are updating state Restaurant cards into <Body/>
  
    render(
        <BrowserRouter>
      <Body/>
        </BrowserRouter>
      )

)

const rescards=screen.getAllByTestId("rescardsid")

expect(rescards).toHaveLength(20)

const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"})

fireEvent.click(topRatedBtn)

const cardsAfterFilter=screen.getAllByTestId("rescardsid")

expect(cardsAfterFilter).toHaveLength(1)


 })