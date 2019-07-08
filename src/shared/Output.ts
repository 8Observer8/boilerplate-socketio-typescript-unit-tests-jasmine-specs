
export class Output
{
    private _output: HTMLDivElement;
    private static _instance: Output;

    private constructor() { }

    public static get Instance(): Output
    {
        if (this._instance === undefined || this._instance === null)
        {
            this._instance = new Output();
            this._instance.Initialize();
        }
        return this._instance;
    }

    public Print(text: string): void
    {
        this._output.innerHTML += text;
        this._output.innerHTML += "<br>";
    }

    private Initialize(): void
    {
        this._output = document.getElementById("output") as HTMLDivElement;
        if (this._output === null)
        {
            this._output = document.createElement("div");
            this._output.id = "output";
            document.body.appendChild(this._output);
        }
    }
}