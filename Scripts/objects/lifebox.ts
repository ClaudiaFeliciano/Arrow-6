module objects {
    export class LifeBox extends createjs.Bitmap {
      

        constructor() {
            super(managers.Game.assetManager.getResult("airplanelife"));
            this.Start();           
        }



        public Reset(): void { }

        public Start(): void {
            this.y = 20;
            this.x = 20;
           /* this.wWidth = 40;
            this.Height = 40;*/
        }

        public Update(): void {}

        public Destroy(): void {}
    }
}
