
export class MyBjsClass2
{
    private _myString: string;

    public constructor()
    {
        this._myString = "Hello, World";
    }

    public get MyString(): string
    {
        return this._myString;
    }
}