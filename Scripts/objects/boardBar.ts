module objects {
    export class BoardBar extends createjs.Bitmap{
        constructor() {
            super(managers.Game.assetManager.getResult("table"));
            this.Start();
        }
     

        public Reset(): void {
      
        }        
        
        public Start(): void {     
            this.x=0;
            this.y = 549;
        }

        public Update(): void { 
           
        }

        public Destroy(): void {
            
        }

    }
}