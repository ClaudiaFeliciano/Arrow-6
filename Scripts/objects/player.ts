module objects {
    export class Player extends objects.AbstractGameObject {
        // private instance variables
        //private _shootOrigin: math.Vec2;

        // constructors
        constructor() {
            super("player");
            this.Start();
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 680; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 250; //kiero k el avion comienze en el medio de mi eje y
            //this._shootOrigin = new math.Vec2();
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
            this.ShootFire();
        }
        public Move(): void {

            //mouse control
            //this.y = managers.Game.stage.mouseY;//where the y-coordinate of my plane is gonna be on my x-coordinate.
            //My plane is not allowed go right left with my mouse

            //keyboard control
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= 5;

            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += 5;

            }
        }

        public Reset(): void {

        }

        public Destroy(): void {

        }
        public ShootFire(): void{

            if(this.alpha=1){//esto significa k estoy alive
                let ticker: number= createjs.Ticker.getTicks();
                if((managers.Game.keyboardManager.shoot) && (ticker %10 ==0))//how many frames when i fire my ticker
                {
                    //this._shootOrigin = new math.Vec2(this.x, this.y -this.Height-2)
                    let currentshot = managers.Game.shootManager.CurrentShoot;  //call a shoot into being
                    let shoot = managers.Game.shootManager.Shoots[currentshot];
                    shoot.x = this.x + -10 ;// desde donde va a salir el shoot
                    shoot.y = this.y + 35;
                    createjs.Sound.play("shootSound");

                    managers.Game.shootManager.CurrentShoot++;
                    if(managers.Game.shootManager.CurrentShoot >49){
                        managers.Game.shootManager.CurrentShoot = 0;
                    }
                }
                /*let boom = new objects.Boom();
                        boom.x = object2.x - object2.Width;
                        boom.y = object2.y - object2.Height;
                        managers.Game.sceneObject.addChild(boom);*/
            } 
           
        }
    }
}