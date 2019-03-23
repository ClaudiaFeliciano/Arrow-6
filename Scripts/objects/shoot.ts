module objects {
  export class Shoot extends objects.AbstractGameObject {
    // constructor
    constructor() {
      super("shot");
      this.Start();
    }

    // public methods
    public Reset(): void {
      this.x = -2000;
      this.y = -2000;
     
    }
    private _animationEnded() {
      this.alpha = 1;
      this.off("animationend", this._animationEnded.bind(this), false);//remove my event listener
    
  }
    public Start(): void {
      this.alpha=1;
      this.HalfWidth = 0; // duda
      this.HalfHeight = -10; // duda
      this.on("animationend", this._animationEnded.bind(this), false);

      this.Reset();
    }

    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Destroy(): void { }
    public Move(): void {
      if (managers.Game.goingLeft) {
        this.x += this.HalfHeight;
      }
      if (managers.Game.goingRigth) {
        this.x -= this.HalfHeight;
      }
      if (managers.Game.goingUp) {
        this.y += this.HalfHeight;
      }
      if (managers.Game.goingDown) {
        this.y -= this.HalfHeight;
      }
    }
    public CheckBounds(): void {
      /*  if (this.x <= -this.Height) {
          this.Reset();*/

      if (this.y <= -this.Height) {
        this.Reset();
      }
      if (this.x <= -this.Width) {
        this.Reset();
      }
    }
  }
}
