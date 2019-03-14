module scenes {
    export class Start extends objects.Scene {
        // private instance variable
        private _nameGame: objects.Button;
        private _space: objects.Space;
        private _startButton: objects.Button;
        private _musicButton: objects.Button;
        private _settingButton: objects.Button;
        private _restartButton: objects.Button;


        // constructor
        constructor() {
            super();

            this.Start();
        }

        // public methods

        public Start(): void {

            this._space = new objects.Space();

            this._nameGame = new objects.Button("ArrowGame", 497.5, 200, true);
            this._startButton = new objects.Button("start", 497.5, 360, true);
            this._settingButton = new objects.Button("settings", 425.5, 446, true);
            this._musicButton = new objects.Button("music", 565.5, 446, true);
            this._restartButton = new objects.Button("exit", 497.5, 524, true);

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
            this.addChild(this._musicButton);
            this.addChild(this._settingButton);

            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });

        }
    }
}