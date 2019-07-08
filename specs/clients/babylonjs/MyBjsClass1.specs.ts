
import { MyBjsClass1 } from "../../../src/clients/babylonjs/MyBjsClass1";

describe("MyBjsClass1Tests", () =>
{
    it("Constructor_PropertyMyNumberMustBeSetFive", () =>
    {
        let myInstance = new MyBjsClass1();
        
        let actualResult = myInstance.MyNumber;

        expect(actualResult).toEqual(5);
    });
});
