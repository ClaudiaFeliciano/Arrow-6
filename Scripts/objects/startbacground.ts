module objects {
    export class StartBackground extends createjs.Bitmap{
        constructor() {
            super(managers.Game.assetManager.getResult("spaceX"));

           // this.Start();
        }

        public Reset(): void {
            
        }        
        
        public Start(): void { 
            
            this.Reset();
        }

        public Update(): void { 
           
        }

        public Destroy(): void {
            
        }

    }
}