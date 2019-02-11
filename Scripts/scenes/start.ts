module scenes {
    export class Start extends objects.Scene {
        // private instance variable
         private _welcomeLabel:objects.Label;
         private _space:objects.Space;
         private _startButton:objects.Button;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {

            this._space = new objects.Space();
            this._welcomeLabel = new objects.Label("ARROW 2", "60px", "Consolas", "#FF0000", 320, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);

            this.Main();
        }        
        
        public Update(): void {
            this._space.Update();
        }
        
        public Destroy(): void {
            this.removeAllChildren();
        }
        
        public Reset(): void {

        }
        
        public Main(): void {
            // adds space to the stage
        
        this.addChild(this._space);

        this.addChild(this._welcomeLabel);

        this.addChild(this._startButton);

        this._startButton.on("click", ()=>{
            managers.Game.currentState = config.Scene.PLAY;
        });

    }
    }
}