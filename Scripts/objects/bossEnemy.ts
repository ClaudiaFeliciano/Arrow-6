module objects {
  export class Boss extends objects.AbstractGameObject {
    // private instance variables
    private _horizontalSpeed: number;

    // public properties

    // constructor
    constructor() {
      // Change the image here ****CLAUDIA****
      // super("boss");
      super("enemy");

      this.Start();
    }

    // private methods
    private _move(): void {
      this.x += this._horizontalSpeed;
    }

    private _checkBounds(): void {
      if (this.x > 1024 + this.Width) {
        this.Reset();
      }
    }

    // public methods

    public Reset(): void {
      this._horizontalSpeed = 4;
      this.x = -this.Width;
      this.y = Math.floor(Math.random() * (500 - this.Height)); // 500 bs there will be a panel at the botton
    }

    public Start(): void {
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
