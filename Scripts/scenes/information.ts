module scenes {
    export class Information extends objects.Scene {
        // private instance variable
       
        private _startbackground: objects.StartBackground;
        private _startButton: objects.Button;
        private _musicButton: objects.Button;
        private _exitButton: objects.Button;
        private _boardinf: objects.BoardInformation;  
        private _engineSound: createjs.AbstractSoundInstance;


        // constructor
        constructor() {
            super();

            this.Start();
        }

        // public methods

        public Start(): void {

            this._startbackground = new objects.StartBackground();
            this._boardinf = new objects.BoardInformation();
        
           
            this._startButton = new objects.Button("start", 565.5, 500, true);
            this._musicButton = new objects.Button("music", 980.5, 566, true);
            this._exitButton = new objects.Button("exit", 760.5, 500, true);

            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1; 
            this._engineSound.volume = 0.8;
            this.Main();
        }

        public Update(): void {
            this._startbackground.Update();
         
            
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {

        }

        public Main(): void {

            this.addChild(this._startbackground);
            this.addChild( this._boardinf);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);
            this.addChild(this._musicButton);
    
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY1;
               this._engineSound.stop();
            });
            this._exitButton.on("click", () => {
                managers.Game.currentState = config.Scene.START1;
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