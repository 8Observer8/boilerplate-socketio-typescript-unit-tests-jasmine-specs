
import { MyPixijsClass1 } from "../../../src/clients/pixijs/MyPixijsClass1";

describe("MyPixijsClass1Tests", () =>
{
    it("Constructor_PropertyMyNumberMustBeSetFive", () =>
    {
        let myInstance = new MyPixijsClass1();
        
        let actualResult = myInstance.MyNumber;

        expect(actualResult).toEqual(5);
    });
});
