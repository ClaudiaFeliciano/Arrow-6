module managers {
    export class Keyboard {
        //private instance variables

        //public instances variables
        public moveForward: boolean;
        public moveBackward: boolean;

        public moveLeft: boolean;
        public moveRight: boolean;
        public jump: boolean;
        public enable: boolean;
        public paused: boolean;

        //cosntructor
        constructor() {
            this.enable = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);

        }

        //private methods

        //public methods
        public onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                //(fall through)
                case config.Keys.W: //up key
                case config.Keys.UP_ARROW:
                    this.moveForward = true;
                    break;

                
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = true;
                    break;

              

                case config.Keys.D:
                case config.Keys.space:
                    break;
            }
        }

        public onKeyUp(event: KeyboardEvent): void{
            
        }
    }
}