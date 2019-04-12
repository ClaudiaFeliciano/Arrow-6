module objects {
  export class RedEnemy extends objects.AbstractGameObject {
    // private instance variables
    private _vSpeed: number;

    // public properties

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
      if (this.y < 186 - this.Height) {
        this._vSpeed = 2;
      }
    }

    // public methods
    public Start(): void {
      this._vSpeed = 2;
      this.x = 500;
      this.y = -200;
    }

    public Update(): void {
      managers.Game.yRedEnemy = this.y;
      managers.Game.xRedEnemy = this.x;
      console.log("TCL: RedEnemy -> this.x", this.x);
      console.log("TCL: RedEnemy -> this.getBounds", this.getBounds().width);
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
    public Reset(): void {}
  }
}
