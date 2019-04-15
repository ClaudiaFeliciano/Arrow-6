module managers {
  export class ScoreBoard {

    private _lives: number;
    private _score: number;
    private _highscores: number;
    private _level: number;

    public LivesLabel: objects.Label;
    public ScoreLabel: objects.Label;
    public LevelLabel: objects.Label;
    public HighScoreLabel: objects.Label;



    get Lives(): number {
      return this._lives;
    }

    set Lives(newLives: number) {
      this._lives = newLives;
      this.LivesLabel.text = "Lives: " + this._lives;
    }

    get Level(): number {
      return this._level;
    }

    set Level(newLevel: number) {
      this._level = newLevel;
      this.LevelLabel.text = "Level: " + this._level;
    }

    get Score(): number {
      return this._score;
    }

    set Score(newScore: number) {
      this._score = newScore;
      this.ScoreLabel.text = "Score: " + this._score;
    }

    get HighScore(): number {
      return this._highscores;
    }

    set HighScore(newHighScore: number) {
      this._highscores = newHighScore;
      this.HighScoreLabel.text = "High score: " + this._highscores;
    }

    constructor() {
      this._initialize();
    }

    private _initialize(): void {
      this.LivesLabel = new objects.Label("Lives: 99 ", "20px", "Consolas", "#879EB5", 900, 560, false);
      this.ScoreLabel = new objects.Label("Score: 99999 ", "20px", "Consolas", "#879EB5", 20, 565, false);
      this.HighScoreLabel = new objects.Label("High Score: 99999 ", "30px", "Consolas", "#879EB5", 520, 255, true);
      this.LevelLabel = new objects.Label("Level: ", "20px", "Consolas", "#879EB5", 210, 569, false);


      this.Lives = 5;
      this.Score = 0;
      this.HighScore = 0;
      this.Level = 1;
    }

    public AddGameUI(currentScene:objects.Scene):void {
      currentScene.addChild(this.LivesLabel);
      currentScene.addChild(this.ScoreLabel);
      currentScene.addChild(this.LevelLabel);
  }

    public AddHighScore(currentScene: objects.Scene): void {
      currentScene.addChild(this.HighScoreLabel);
    }

    public Reset(livesNum: number = 5, scoreNum: number = 0, levelNum: number = 1): void {
      this.Lives = livesNum;
      this.Score = scoreNum;
      this.Level = levelNum;
    }
  }
}
