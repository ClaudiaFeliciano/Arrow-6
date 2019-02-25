module objects {
    export class Player extends objects.AbstractGameObject {
        // private instance variables

        // constructors
        constructor() {
            super("plane");
            this.Start();
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 680; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 250; //kiero k el avion comienze en el medio de mi eje y
        }

        public Update(): void {
            this.Move();

            // checking the bottom boundary
            if (this.y >= 650 - this.HalfWidth) { //it is not responsive.If I want to fo that i should add a configuration file
                this.y = 650 - this.HalfWidth;
            }

            // checking the top boundary
            if (this.y <= this.HalfWidth) {
                this.y = this.HalfWidth;
            }
        }
        public Move(): void{
           
            //mouse control
            //this.y = managers.Game.stage.mouseY;//where the y-coordinate of my plane is gonna be on my x-coordinate.
            //My plane is not allowed go right left with my mouse
           
            //keyboard control
            if(managers.Game.keyboardManager.moveForward){
                this.y -=5;

            } 
            if(managers.Game.keyboardManager.moveBackward){
                this.y +=5;
                
            } 
        }

        public Reset(): void {

        }

        public Destroy(): void {

        }
    }
}