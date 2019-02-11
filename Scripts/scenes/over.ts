module scenes {
    export class Over extends objects.Scene {
        // private instance variable
         private _gameOverLabel:objects.Label;
         private _space:objects.Space;
         private _restartButton:objects.Button;

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
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this._restartButton = new objects.Button("restartButton", 320, 360, true);

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
            // adds ocean to the stage
        
        this.addChild(this._space);

        this.addChild(this._gameOverLabel);

        this.addChild(this._restartButton);

        this._restartButton.on("click", function(){
            // start the play scene
        });
    }


    }
}