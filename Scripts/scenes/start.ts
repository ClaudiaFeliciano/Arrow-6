module scenes {
    export class Start extends objects.Scene {
        // private instance variable
        private _nameGame: objects.Label;
        private _space: objects.Space;
        private _startButton: objects.Button;
        private _restartButton: objects.Button;


        // constructor
        constructor() {
            super();

            this.Start();
        }

        // public methods

        public Start(): void {
          
            this._space = new objects.Space();
            this._nameGame = new objects.Label("ARROW 6", "60px", "Dobkinplain", "#ed8404", 380, 240, true);
            this._startButton = new objects.Button("play", 380, 360, true);
            this._restartButton = new objects.Button("restart", 380, 450, true);
            console.log(this._space);

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

            this.addChild(this._space);

            this.addChild(this._nameGame);

            this.addChild(this._startButton);
            this.addChild(this._restartButton);

            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });

        }
    }
}