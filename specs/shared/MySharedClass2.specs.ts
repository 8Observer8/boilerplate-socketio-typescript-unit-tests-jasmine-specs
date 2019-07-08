
import { MySharedClass2 } from "../../src/shared/MySharedClass2";

describe("MySharedClass2Tests", () =>
{
    it("Constructor_PropertyMyStringMustBeHelloWorld", () =>
    {
        let sharedClass = new MySharedClass2();
        
        let actualString = sharedClass.MyString;

        expect(actualString).toEqual("Hello, World");
    });
});
