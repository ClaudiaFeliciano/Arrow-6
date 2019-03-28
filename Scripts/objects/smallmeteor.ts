module objects {
  export class SmallMeteor extends objects.AbstractGameObject {
    // private instance variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    // constructor
    constructor() {
      super("smallmeteor");
      this.Start();
    }

    // private methods
    private _move(): void {
      this.y += this._horizontalSpeed;
    }

    private _checkBounds(): void {
      if (this.x > 1024 + this.Width || this.y > 600 + this.Height) {
        this.Reset();
      }
    }

    public Reset(): void {
      this._horizontalSpeed = 2;
      this.x = Math.floor(Math.random() * (1024 - this.Width) + this.HalfWidth);
      this.y = -this.Height;
      this.alpha = 1;
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
