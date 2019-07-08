
import { MyServerClass1 } from "../../src/server/MyServerClass1";

describe("MServerClass1Tests", () =>
{
    it("Constructor_PropertyMyNumberMustBeSetFive", () =>
    {
        let serverClass = new MyServerClass1();
        
        let actualNumber = serverClass.MyNumber;

        expect(actualNumber).toEqual(5);
    });
});
