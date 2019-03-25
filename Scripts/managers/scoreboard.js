var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Level", {
            get: function () {
                return this._level;
            },
            set: function (newLevel) {
                this._level = newLevel;
                this.LevelLabel.text = "Level: " + this._level;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highscores;
            },
            set: function (newHighScore) {
                this._highscores = newHighScore;
                this.HighScoreLabel.text = "High score: " + this._highscores;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new objects.Label("Lives: ", "20px", "Consolas", "#0048BA", 900, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999 ", "20px", "Consolas", "#0048BA", 900, 35, false);
            this.HighScoreLabel = new objects.Label("High Score: ", "30px", "Consolas", "#0048BA", 500, 255, true);
            this.LevelLabel = new objects.Label("Level: ", "20px", "Consolas", "#0048BA", 940, 85, true);
            this.Lives = 5;
            this.Score = 0;
            this.HighScore = 0;
            this.Level = 1;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map