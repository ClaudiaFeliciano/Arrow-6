module objects {
  export class Player extends objects.AbstractGameObject {
    public planeflash: objects.PlaneAfterCrash;
    //private _shootOrigin: math.Vec2;
    _bulletSpawn:math.Vec2;

    // public properties
    get BulletSpawn():math.Vec2 {
        return this._bulletSpawn;
    }

    set BulletSpawn(newSpawnPoint:math.Vec2) {
        this._bulletSpawn = newSpawnPoint;
    }

    // constructors
    constructor() {
      super("player");
      this.Start();
    }
    private _animationEnd(): void {
      this.alpha = 1;
      this.planeflash.alpha = 0;
    }

    public Start(): void {
      this.planeflash = new objects.PlaneAfterCrash();
      this.planeflash.alpha = 0;
      this.planeflash.on("animationend", this._animationEnd.bind(this), false);

      this.regX = this.HalfWidth;
      this.regY = this.HalfHeight;

      this.x = 1000;
      this.y = 300;
     // this._shootOrigin = new math.Vec2();
    }

    public Update(): void {
      this.Move();
      this._updatePosition();
      this.BulletSpawn = new math.Vec2(this.x - 6, this.y - this.HalfHeight - 2);
      // checking the bottom boundary
      if (this.y >= 549 - this.HalfHeight) {
        //600 minus the high of the scorebar
        this.y = 549 - this.HalfHeight;
      }

      // checking the top boundary
      if (this.y <= this.HalfHeight) {
        this.y = this.HalfHeight;
      }

      // Check right boundary
      if (this.x >= 1024 - this.HalfWidth) {
        this.x = 1024 - this.HalfWidth;
      }

      // Check left boundary
      if (this.x <= this.HalfWidth) {
        this.x = this.HalfWidth;
      }
      managers.Game.xPlayer = this.x;
      managers.Game.yPlayer = this.y;
    //  this.ShootFire();
    }
    public Move(): void {
      if (managers.Game.keyboardManager.moveForward) {
        this.y -= 4;
        managers.Game.goingLeft = false;
        managers.Game.goingRigth = false;
        managers.Game.goingUp = true;
        managers.Game.goingDown = false;
      }
      if (managers.Game.keyboardManager.moveBackward) {
        this.y += 4;

        managers.Game.goingLeft = false;
        managers.Game.goingRigth = false;
        managers.Game.goingUp = false;
        managers.Game.goingDown = true;
      }
      if (managers.Game.keyboardManager.moveLeft) {
        this.x -= 4;

        managers.Game.goingLeft = true;
        managers.Game.goingRigth = false;
        managers.Game.goingUp = false;
        managers.Game.goingDown = false;
      }
      if (managers.Game.keyboardManager.moveRight) {
        this.x += 4;

        managers.Game.goingLeft = false;
        managers.Game.goingRigth = true;
        managers.Game.goingUp = false;
        managers.Game.goingDown = false;
      }
      this.Gravity();
      this.planeflash.x = this.x;
      this.planeflash.y = this.y;
      this.planeflash.regX = this.regX;
      this.planeflash.regY = this.regY;
      this.planeflash.rotation = this.rotation;
      //this.planeflash.rotation = this.rotation;
    }

    public Gravity(): void {
      if (managers.Game.goingLeft) {
        this.x -= 2;
      }
      if (managers.Game.goingRigth) {
        this.x += 2;
      }
      if (managers.Game.goingUp) {
        this.y -= 2;
      }
      if (managers.Game.goingDown) {
        this.y += 2;
      }
    }

    /*public Reset(): void {}

    public Destroy(): void {
      
    }

   /* public ShootFire(): void {
      if ((this.alpha = 1)) {
        let ticker: number = createjs.Ticker.getTicks();
        if (managers.Game.keyboardManager.shoot && ticker % 10 == 0) {
          //how many frames when i fire my ticker
          this._shootOrigin = new math.Vec2(this.x, this.y - this.HalfHeight);
          let currentshot = managers.Game.shootManager.CurrentShoot;
          let shoot = managers.Game.shootManager.Shoots[currentshot];
          shoot.x = this._shootOrigin.x;
          shoot.y = this._shootOrigin.y;
          shoot.rotation = this.rotation;
          managers.Game.shootManager.CurrentShoot++;

          if (managers.Game.shootManager.CurrentShoot > 29) {
            managers.Game.shootManager.CurrentShoot = 0;
           
          }

          if (managers.Game.goingLeft) {
            if (managers.Game.shootManager.swi == 0) {
              shoot.y = this.y - 40;
              managers.Game.shootManager.swi = 1;
            } else {
              shoot.y = this.y + 35;
              managers.Game.shootManager.swi = 0;
            }
            shoot.x = this.x - 10;
          }
          if (managers.Game.goingRigth) {
            if (managers.Game.shootManager.swi == 0) {
              shoot.y = this.y - 40;
              managers.Game.shootManager.swi = 1;
            } else {
              shoot.y = this.y + 35;
              managers.Game.shootManager.swi = 0;
            }
            shoot.x = this.x + 10;
          }

          if (managers.Game.goingDown) {
            if (managers.Game.shootManager.swi == 0) {
              shoot.x = this.x - 35;
              managers.Game.shootManager.swi = 1;
            } else {
              shoot.x = this.x + 35;
              managers.Game.shootManager.swi = 0;
            }
            shoot.y = this.y - 10;
          }
          if (managers.Game.goingUp) {
            if (managers.Game.shootManager.swi == 0) {
              shoot.x = this.x - 35;
              managers.Game.shootManager.swi = 1;
            } else {
              shoot.x = this.x + 35;
              managers.Game.shootManager.swi = 0;
            }
            shoot.y = this.y - 10;
          }
          createjs.Sound.play("shootSound");
        }
      }
      
  }*/
  }
}
