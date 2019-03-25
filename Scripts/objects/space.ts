module objects {
    export class Space extends createjs.Bitmap{//objects.AbstractGameObject {
    

        // constructor
        constructor() {
            super(managers.Game.assetManager.getResult("space"));

        }

     
        // public methods
        //Reset the object location to some value
        public Reset(): void {
            this.x = -224; //1024-800 that is my width
        }        
        
        public Start(): void { 
            
            this.Reset();
        }

        public Update(): void { }

        public Destroy(): void { }

    }
}