
export class MyPixijsClass1
{
    private _myNumber: number;

    public constructor()
    {
        this._myNumber = 5;
    }

    public get MyNumber(): number
    {
        return this._myNumber;
    }
}