
import { MySharedClass1 } from "../../src/shared/MySharedClass1";

describe("MySharedClass1Tests", () =>
{
    it("Constructor_PropertyMyNumberMustBeSetFive", () =>
    {
        let sharedClass = new MySharedClass1();
        
        let actualNumber = sharedClass.MyNumber;

        expect(actualNumber).toEqual(5);
    });
});
