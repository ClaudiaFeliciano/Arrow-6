module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.x >=0) {
                this.Reset();
            }
        }

        private _move():void {
            this.x += this.horizontalSpeed;
        }

        // public methods

        public Reset(): void {
            this.x = -224; //1024-800 that is my width
        }        
        
        public Start(): void {
            this.Reset();
            this.horizontalSpeed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}