
import { MyServerClass2 } from "../../src/server/MyServerClass2";

describe("MyServerClass2Tests", () =>
{
    it("Constructor_PropertyMyStringMustBeHelloWorld", () =>
    {
        let sharedClass = new MyServerClass2();
        
        let actualString = sharedClass.MyString;

        expect(actualString).toEqual("Hello, World");
    });
});
