module objects {
  export class RedEnemy extends objects.AbstractGameObject {
    // private instance variables
    private _vSpeed: number;

    // public properties
    public yRed: number = 0;

    // constructor
    constructor() {
      super("redEnemy");
      this.Start();
    }

    // private methods
    private _move(): void {
      this.y += this._vSpeed;
    }

    private _checkBounds(): void {
      if (this.y > 560 - this.Height) {
        this._vSpeed = -2;
      }
      if (this.y < 180 - this.Height) {
        this._vSpeed = 2;
      }
    }

    // public methods
    public Reset(): void {}

    public Start(): void {
      this._vSpeed = 2;
      this.x = -this.HalfWidth;
      this.y = Math.floor(
        Math.random() * (500 - this.Height) + this.HalfHeight
      );
      this.yRed = this.y;
    }

    public Update(): void {
      this.yRed = this.y;
      managers.Game.yRedEnemy = this.yRed;

      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
    public Reset(): void {}
  }
}
