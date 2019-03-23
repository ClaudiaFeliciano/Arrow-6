module managers {
  export class ScoreBoard {
    //private instance variables
    private _lives: number;
    private _score: number;
    private _highscores: number;
    private _level: number;

    // public Instance variables
    public LivesLabel: objects.Label;
    public ScoreLabel: objects.Label;
    public LevelLabel: objects.Label;
    public HighScoreLabel: objects.Label;

    //public properties
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
      this.LivesLabel = new objects.Label("Lives: ", "20px", "Consolas", "#FFF000", 900, 10, false);
      this.ScoreLabel = new objects.Label("Score: 99999 ", "20px", "Consolas", "#FFF000", 900, 25, false);
      this.HighScoreLabel = new objects.Label("High Score: ", "30px", "Consolas", "#FFF000", 900, 40, true);
      this.LevelLabel = new objects.Label("Level: ", "20px", "Consolas", "#FFF000", 900, 55, true);

      this.Lives = 5;
      this.Score = 0;
      this.HighScore = 0;
      this.Level = 1;
    }
  }
}
