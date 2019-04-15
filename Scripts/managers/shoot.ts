module managers {
  export class Shoot {
    private _bullets: objects.Shoot[];
    private _bulletNum: number;
    private _currentBullet: objects.Shoot;
    // private _currentBullet1: objects.Shoot;
    private _currentBulletIndex: number;

    // public properties
    get Shoots(): objects.Shoot[] {
      return this._bullets;
    }

    set Shoots(newBulletArray: objects.Shoot[]) {
      this._bullets = newBulletArray;
    }

    get BulletNum(): number {
      return this._bulletNum;
    }

    set BulletNum(numberOfShoots: number) {
      this._bulletNum = numberOfShoots;
    }

    get CurrentBullet(): objects.Shoot {
      return this._currentBullet;
    }

    set CurrentBullet(newBulletPointer: objects.Shoot) {
      this._currentBullet = newBulletPointer;
    }

    /* get CurrentBullet1():objects.Shoot {
       return this._currentBullet1;
   }
 
   set CurrentBullet1(newBulletPointer:objects.Shoot) {
       this._currentBullet1 = newBulletPointer;
   }*/

    // constructor
    constructor(bulletNum: number = 100) {
      this.BulletNum = bulletNum;
      this.Start();
    }


    // public methods
    public Start(): void {
      // create the bullets container
      this.Shoots = new Array<objects.Shoot>();

      // fill up bullet container
      for (let count = 0; count < this.BulletNum; count++) {
        this.Shoots[count] = new objects.Shoot();
      }

      // set the current bullet to the first bullet object
      this._currentBulletIndex = 0;
      this.CurrentBullet = this.Shoots[this._currentBulletIndex];
      // this.CurrentBullet1 = this.Shoots[this._currentBulletIndex];
      this.CurrentBullet.x = this.CurrentBullet.Position.x;
      this.CurrentBullet.y = this.CurrentBullet.Position.y;
      this.CurrentBullet.rotation = this.CurrentBullet.rotation;

      /*  this.CurrentBullet1.x = this.CurrentBullet1.Position.x + 25;
        this.CurrentBullet1.y = this.CurrentBullet1.Position.y -15;
        this.CurrentBullet1.rotation = this.CurrentBullet1.rotation;*/

    }

    public Update(): void {
      this.Shoots.forEach(bullet => {
        bullet.Update();
      });
    }

    public FireBullet(spawnPoint: math.Vec2, direction: math.Vec2): void {
      this.CurrentBullet.Position = spawnPoint;
      this.CurrentBullet.x = spawnPoint.x;
      this.CurrentBullet.y = spawnPoint.y;
      /*  this.CurrentBullet1.Position = spawnPoint;
        this.CurrentBullet1.x = spawnPoint.x + 25;
        this.CurrentBullet1.y = spawnPoint.y - 15;*/

      if (managers.Game.goingDown) {
        this.CurrentBullet.Direction = math.Vec2.down();
        //this.CurrentBullet1.Direction = math.Vec2.down();
      }
      if (managers.Game.goingUp) {
        this.CurrentBullet.Direction = math.Vec2.up();
        //this.CurrentBullet1.Direction = math.Vec2.up();
      }
      if (managers.Game.goingLeft) {
        this.CurrentBullet.Direction = math.Vec2.left();
        // this.CurrentBullet1.Direction = math.Vec2.left();
      }
      if (managers.Game.goingRigth) {
        this.CurrentBullet.Direction = math.Vec2.right();
        // this.CurrentBullet1.Direction = math.Vec2.right();
      }
      //  this.CurrentBullet.Direction = direction;
      this.CurrentBullet.rotation = managers.Game.player.rotation;
      this.CurrentBullet.IsInPlay = true;

      /* this.CurrentBullet1.rotation = this.CurrentBullet.rotation;
       this.CurrentBullet1.IsInPlay = true;*/

      this._currentBulletIndex++;
      if (this._currentBulletIndex >= this.Shoots.length) {
        this._currentBulletIndex = 0;
      }
      this.CurrentBullet = this.Shoots[this._currentBulletIndex];
      //this.CurrentBullet1 = this.Shoots[this._currentBulletIndex];
    }
  }
}