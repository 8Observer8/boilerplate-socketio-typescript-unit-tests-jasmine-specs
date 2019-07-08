
import { MyBjsClass2 } from "../../../src/clients/babylonjs/MyBjsClass2";

describe("MyBjsClass2Tests", () =>
{
    it("Constructor_PropertyMyStringMustBeHelloWorld", () =>
    {
        let myInstance = new MyBjsClass2();
        
        let actualResult = myInstance.MyString;

        expect(actualResult).toEqual("Hello, World");
    });
});
