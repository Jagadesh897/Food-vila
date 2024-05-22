import { sum } from "../sum";
test("sum the a and b ",()=>{
    const result = sum(5,7);
    //Asseration
    expect(result).toBe(12);
});