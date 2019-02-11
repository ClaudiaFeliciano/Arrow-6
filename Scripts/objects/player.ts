module objects {
    export class Player extends objects.AbstractGameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        
        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 635; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
        }

        public Update():void {
            this.y = managers.Game.stage.mouseY;//where the y-coordinate of my plane is gonna be on my x-coordinate.
            //My plane is not allowed go right left with my mouse

            // checking the bottom boundary
            if(this.y > 904 - this.HalfWidth) { //it is not responsive.If I want to fo that i should add a configuration file
                this.y = 904 - this.HalfWidth;
            }

            // checking the top boundary
            if(this.y <= this.HalfWidth) {
                this.y = this.HalfWidth;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}