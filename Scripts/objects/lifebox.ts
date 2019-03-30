module objects {
    export class LifeBox extends createjs.Bitmap {
      

        constructor() {
            super(managers.Game.assetManager.getResult("airplanelife"));
                     
        }



        public Reset(): void { }

        public Start(): void {
           
        }

        public Update(): void {}

        public Destroy(): void {}
    }
}
