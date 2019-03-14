module managers {
  export class Shoot {
    private _shootCount: number;
    public Shoots: objects.Shoot[];
    public CurrentShoot: number;
    public swi: number = 0;

    constructor() {
      this.Start();
    }

    private _buildShootPool(): void {
      for (let count = 0; count < this._shootCount; count++) {
        this.Shoots[count] = new objects.Shoot();
      }
    }
    public Start(): void {
      this._shootCount = 50; //set the default shoot account
      this.Shoots = new Array<objects.Shoot>(); // create the shoot container
      this._buildShootPool(); //build shoot array
      this.CurrentShoot = 0; //set the Current shoot to 0
    }
    public Update(): void {
      this.Shoots.forEach(shoot => {
        shoot.Update();
      });
    }
  }
}
