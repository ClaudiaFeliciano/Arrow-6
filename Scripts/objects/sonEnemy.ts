module objects {
  export class SonEnemy extends objects.AbstractGameObject {
    // private instance variables
    private _horizontalSpeed: number;
    private _GoReverse: boolean = false;
    private _redenemy: objects.RedEnemy;

    // public properties

    // constructor
    constructor() {
      super("sonenemy");
      this.Start();
    }

    // private methods
    private _move(): void {
      if (!this._GoReverse) {
        this.x += 3;
      } else {
        this.x -= 3;
      }
    }

    private _checkBounds(): void {
      if (this.y >= managers.Game.yPlayer) {
        this.y -= 3;
      } else {
        this.y += 3;
      }
      if (this.x >= managers.Game.xPlayer) {
        this._GoReverse = true;
      } else {
        this._GoReverse = false;
      }
      if (this.x > 1024 + this.Width) {
        this.Reset();
      }
    }

    // public methods
    public Reset(): void {
      this.x = this.Width;
      this.y = managers.Game.yRedEnemy;
    }

    public Start(): void {
      this._horizontalSpeed = 4;
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
