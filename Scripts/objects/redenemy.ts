module objects {
  export class RedEnemy extends objects.AbstractGameObject {
    // private instance variables
    private _vSpeed: number;

    // public properties
    public yRed: number = 0;
    public xRed: number = 0;

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
    public Start(): void {
      this._vSpeed = 2;
      this.x = 500;
      this.y = -200;
      this.yRed = this.y;
    }

    public Update(): void {
      this.yRed = this.y;
      this.xRed = this.x;
      managers.Game.yRedEnemy = this.yRed;
      managers.Game.xRedEnemy = this.xRed;
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
    public Reset(): void {}
  }
}
