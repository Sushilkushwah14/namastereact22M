import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//we create a testing browser for testing using jest dom on which we used to render

describe("contact Us test pages",()=>{

    // beforeAll(()=>{
    //     console.log("before all");
    // })

    // beforeEach(()=>{
    //     console.log("before each");
    // })

    // afterAll(()=>{
    //     console.log("afterAll ");
    // })

    
    // afterEach(()=>{
    //     console.log("after each");
    // })

    
    it("should load contact us component",()=>{

        render(<Contact/>)
    //Quering
        const heading=screen.getByRole("heading")
    //Asserting
        expect(heading).toBeInTheDocument()
    })
    it("should load button in contact us component",()=>{
    
        render(<Contact/>)
    
        const button=screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    })
    test("should load button in contact us component",()=>{
    
        render(<Contact/>)
    
        const button=screen.getByText("Submit")
    
        expect(button).toBeInTheDocument()
    })
    
    test("should load input placeholder text=name in contact us component",()=>{
    
        render(<Contact/>)
    
        const inputName=screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument()
    })

    test('should load input boxes on the contact component', () => {
        render(<Contact />);
      
        const inputBoxes = screen.getAllByRole('textbox');
      
        //Roles and ARIA: The role "textbox" is the correct semantic role for text input fields. It encompasses <input type="text"> elements and other types of free-form text inputs.
       //Testing: By using screen.getAllByRole('textbox'), you're leveraging the accessibility semantics to find all text input elements, ensuring your test aligns with best practices for accessible web applications.
       expect(inputBoxes).toHaveLength(2);
        inputBoxes.forEach(inputBox => {
          expect(inputBox.length).not.toBe(3); // Check if each input box is in the document
        });
      });
})


// test('should load 2 input boxes on the contact component', () => {
//  render(<Contact/>)  ;

//  const inputBoxes=screen.getAllByRole("textbox")

//  expect(inputBoxes).toBeInTheDocument()
// })






