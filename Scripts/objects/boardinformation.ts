module objects {
    export class BoardInformation extends createjs.Bitmap{
        constructor() {
            super(managers.Game.assetManager.getResult("menuBar"));

           this.Start();
        }

        public Reset(): void {
           
        }        
        
        public Start(): void { 
            this.x= 140;
            this.y= 100;
        }

        public Update(): void { 
           
        }

        public Destroy(): void {
            
        }

    }
}