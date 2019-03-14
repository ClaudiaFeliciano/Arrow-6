module objects {
    export class Space extends createjs.Bitmap{//objects.AbstractGameObject {
        // private instance variables
       // private horizontalSpeed:number;
        

        // constructor
        constructor() {
            super(managers.Game.assetManager.getResult("space"));

           // this.Start();
        }

      /*  // private methods
        private _checkBounds():void {// ver if some boundery have benn passed
            if(this.x >=0) { //cuando la x es mayor que 0,es decir k ya tope la derecha de mi stage
                this.Reset();
            }
        }*/

        /*private _move():void { //moving my object to the new location
            this.x += this.horizontalSpeed;//is gonna move right 5 px
        }*/

        // public methods
        //Reset the object location to some value
        public Reset(): void {
            this.x = -224; //1024-800 that is my width
        }        
        
        public Start(): void { //Initialazing my variables an create the objects
            //this.horizontalSpeed = 5; // 5 px per frame
            this.Reset();
        }

        public Update(): void { //updates the game object every frame
           
        }

        public Destroy(): void {
            
        }

    }
}