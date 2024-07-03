import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render Restaurant component with props Data",()=>{
    
    render(<RestaurantCard resdata={MOCK_DATA}/>)

 const name =screen.getByText("Pizza Hut")

 expect(name).toBeInTheDocument()
})

it("should render Restautant card component with open label",()=>{
    //homework -test :isopen
})