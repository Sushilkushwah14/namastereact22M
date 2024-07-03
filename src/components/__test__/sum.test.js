import { sum } from "../sum"


test("Sum function should claculate the sum",()=>{

   const result= sum(3,2);
   expect(result).toBe(5);

})