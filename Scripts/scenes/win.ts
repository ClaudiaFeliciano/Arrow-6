module scenes {
  export class Win extends objects.Scene {
    // private instance variable
    private _youwon: objects.Button;
    private _space: objects.Space;
    private _restartButton: objects.Button;
    private _scoreboard: managers.ScoreBoard;

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
      this._youwon = new objects.Button("youwon", 497.5, 200, true);
      this._restartButton = new objects.Button("replay", 500.5, 445, true);
      this._scoreboard = new managers.ScoreBoard();
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
      // adds ocean to the stage
      this.addChild(this._space);
      this.addChild(this._youwon);
      this.addChild(this._restartButton);

      //add scoreboard to the scence

      this.addChild(this._scoreboard.HighScoreLabel);
      this._scoreboard.HighScore = managers.Game.highScore;

      this._restartButton.on("click", () => {
        managers.Game.currentState = config.Scene.PLAY1;
      });
    }
  }
}
