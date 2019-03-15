module objects {
    export class RedEnemy extends objects.AbstractGameObject {
        // private instance variables
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("redenemy"); //ponle al archivo asi en el gamte.ys, agrega esto en el html

            this.Start();
        }
      
        // private methods
        private _move():void {
            this.x += this._horizontalSpeed;
        }

        private _checkBounds():void {
            if(this.x > 1024 + this.Width) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._horizontalSpeed = 5;
            this.x = -this.Width;//esto me da desde donde el objeto saldra
            this.y = Math.floor((Math.random() * (1024 - this.Height)) + this.HalfHeight);
        }        
        
        public Start(): void {
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}