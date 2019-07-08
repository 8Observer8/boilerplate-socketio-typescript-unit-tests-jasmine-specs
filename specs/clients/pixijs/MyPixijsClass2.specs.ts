
import { MyPixijsClass2 } from "../../../src/clients/pixijs/MyPixijsClass2";

describe("MPixijsClass2Tests", () =>
{
    it("Constructor_PropertyMyStringMustBeHelloWorld", () =>
    {
        let myInstance = new MyPixijsClass2();
        
        let actualResult = myInstance.MyString;

        expect(actualResult).toEqual("Hello, World");
    });
});
