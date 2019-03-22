module scenes {
  export class Start3 extends objects.Scene {
    // private instance variable

    private _space: objects.Space;
    private _level2: objects.Button;
    private _startButton: objects.Button;
    private _restartButton: objects.Button;
    private _engineSound: createjs.AbstractSoundInstance;

    // constructor
    constructor() {
      super();

      this.Start();
    }

    // public methods

    public Start(): void {
      this._space = new objects.Space();
      this._level2 = new objects.Button("level3", 497.5, 200, true);
      this._startButton = new objects.Button("start", 487.5, 360, true);
      this._restartButton = new objects.Button("replay", 487.5, 424, true);
      this._engineSound = createjs.Sound.play("startSound");
      this._engineSound.loop = -1;
      this._engineSound.volume = 0.4;
      this.Main();
    }

    public Update(): void {
      this._space.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      this.addChild(this._space);
      this.addChild(this._level2);
      this.addChild(this._startButton);
      this.addChild(this._restartButton);

      this._startButton.on("click", () => {
        managers.Game.currentState = config.Scene.PLAY3;
        this._engineSound.stop();
      });
    }
  }
}
