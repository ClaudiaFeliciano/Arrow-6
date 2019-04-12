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
      managers.Game.yRedEnemy = this.y;
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
      this.Reset();
    }

    public Reset(): void {
      this._vSpeed = 2;
      this.x = this.Width;
      this.y = Math.floor(Math.random() * (500 - this.Height));
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Destroy(): void {}
  }
}
