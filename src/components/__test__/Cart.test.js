import { fireEvent, render,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ResMenu from "../ResMenu"
import MOCK_DATA_NAME from "../mocks/mockResListData.json"
import { Provider } from "react-redux"
import appstore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart.js"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA_NAME),
    })
})

it("shoult load restaurant menu component ",async()=>{

    await act(async ()=>render(
  <BrowserRouter>
 <Provider store={appstore}>
    <Header/>
    <ResMenu/>
    <Cart/>
 </Provider>
 </BrowserRouter>
))

//const accordionHeader=screen.getByText(/Recommended/)

const accordionHeader = screen.getByText("Recommended(20)");

fireEvent.click(accordionHeader)

expect(screen.getAllByTestId("foodItems")).toHaveLength(20);
expect(screen.getAllByText("cart-(0items)")).toBeInTheDocument()
 
const addBtns=screen.getAllByRole("button",{name:"Add+"})

fireEvent.click(addBtns[0])

expect(screen.getAllByText("cart-(1items)")).toBeInTheDocument()

fireEvent.click(addBtns[1])

expect(screen.getAllByText("cart-(2items)")).toBeInTheDocument()

expect(screen.getAllByTestId("foodItems")).toHaveLength(22)

fireEvent.click(screen.getByRole("button",{name:"clear cart"}))

expect(screen.getAllByTestId("foodItems")).toHaveLength(20)

expect(screen.getByAltText("!Hey your cart is empty ,please add something into the cart"))
 .toBeInTheDocument();
})