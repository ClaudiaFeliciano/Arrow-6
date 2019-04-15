module objects {
  export class Shoot extends objects.AbstractGameObject {

    private _speed: number;
    private _direction: math.Vec2;
    private _isInPlay: boolean;
    private _velocity: math.Vec2;


    get Direction(): math.Vec2 {
      return this._direction;
    }

    set Direction(newDirection: math.Vec2) {
      this._direction = newDirection;
    }

    get IsInPlay(): boolean {
      return this._isInPlay;
    }

    set IsInPlay(newState: boolean) {
      this._isInPlay = newState;
      if (!this._isInPlay) {
        this.Reset();
      }
      this._velocity = math.Vec2.Mulitply(this.Direction, this._speed);
    }

    // constructor
    constructor() {
      super("shot");
      this.Start();
    }

    // public methods
    public Reset(): void {
      this.x = -2000;
      this.y = -2000;
    
      if (managers.Game.goingDown)
      {
        this.Direction = math.Vec2.down();
      }
      if (managers.Game.goingUp)
      {
        this.Direction = math.Vec2.up();
      }
      if (managers.Game.goingLeft)
      {
        this.Direction = math.Vec2.left();
        this.y = this.y - 40;
      }
      if (managers.Game.goingRigth)
      {
        this.Direction = math.Vec2.right();
      }
      this._updatePosition();
     // this.Direction = math.Vec2.zero();
    }
    private _animationEnded() {
      this.alpha = 1;
      this.off("animationend", this._animationEnded.bind(this), false);//remove my event listener

    }
    public Start(): void {
      this._speed = 15;
      this.IsInPlay = false;

      // this.Reset();
    }

    public Update(): void {
      if (this.IsInPlay) {
        this.Move();
        this.CheckBounds();
      }
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
      this._updatePosition();
      this.Position = math.Vec2.Add(this.Position, this._velocity);
      this.x = this.Position.x;
      this.y = this.Position.y;
    }
    public CheckBounds(): void {
      /*  if (this.x <= -this.Height) {
          this.Reset();*/

      if (this.y <= -this.Height) {
        this.IsInPlay = false;
        this.Reset();

      }
      if (this.x <= -this.Width) {
        this.IsInPlay = false;
        this.Reset();
      }
    }
  }
}
