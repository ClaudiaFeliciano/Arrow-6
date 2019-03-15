module objects {
    export class SmallMeteor extends objects.AbstractGameObject {
      // private instance variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      // public properties
  
      // constructor
      constructor() {
        super("a30000");
        this.Start();
      }
  
      // private methods
      private _move(): void {
       //this.x += this._verticalSpeed; //i want my meteor to move not ony vertical but also horizontal
        this.y += this._horizontalSpeed;
      }
  
      private _checkBounds(): void {
        if ((this.x > 1024 + this.Width) || (this.y > 600 + this.Height))  {
          this.Reset();
        }
      }
  
      // public methods
  
      public Reset(): void {
        //this._verticalSpeed = 1; //randomizing my speed as well
        this._horizontalSpeed = 1;
        this.x = Math.floor(Math.random() * (1024 - this.Width) + this.HalfWidth); //de donde kiero k comience
        this.y = Math.floor(Math.random() * (1024 - this.Height) + this.HalfHeight
        );
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
  