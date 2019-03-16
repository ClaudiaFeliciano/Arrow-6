module scenes {
    export class Start extends objects.Scene {
        // private instance variable
        private _nameGame: objects.Button;
        private _space: objects.Space;
        private _startButton: objects.Button;
        private _musicButton: objects.Button;
        private _settingButton: objects.Button;
        private _restartButton: objects.Button;
        //private _window: createjs.Bitmap;
       // private _explosion: objects.ExplosionStart[];
       // private _explosionNum: number;
        private _engineSound: createjs.AbstractSoundInstance;


        // constructor
        constructor() {
            super();

            this.Start();
        }

        // public methods

        public Start(): void {

            this._space = new objects.Space();
            /*this._window = new createjs.Bitmap("window");
            this._window.x= 400;
            this._window.y= 220;*/
            /*this._explosionNum = 5;
            this._explosion = new Array<objects.ExplosionStart>();
            for (let count = 0; count < this._explosionNum; count++) {
              this._explosion[count] = new objects.ExplosionStart();
            }*/
            this._nameGame = new objects.Button("ArrowGame", 497.5, 200, true);
            this._startButton = new objects.Button("start", 497.5, 360, true);
            this._settingButton = new objects.Button("settings", 425.5, 446, true);
            this._musicButton = new objects.Button("music", 565.5, 446, true);
            this._restartButton = new objects.Button("exit", 497.5, 524, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1; 
            this._engineSound.volume = 0.8;
            this.Main();
        }

        public Update(): void {
            this._space.Update();
            /*for (const explosion of this._explosion) {
                explosion.Update();
              
              }*/
            
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {

        }

        public Main(): void {

            this.addChild(this._space);
            //this.addChild(this._window);
            this.addChild(this._nameGame);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);
            this.addChild(this._musicButton);
            this.addChild(this._settingButton);
            /*for (const explosion of this._explosion) {
                this.addChild(explosion);
              }
*/
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
               this._engineSound.stop();
            });
            this._musicButton.on("click", () => {
                if(this._engineSound.volume != 0.0)
                {
                    this._engineSound.volume -= 0.2;   
                }
                else                 
                    if(this._engineSound.volume <= 0.0)
                {
                    this._engineSound.volume = 1.0;
                
                }                
            });


        }
    }
}