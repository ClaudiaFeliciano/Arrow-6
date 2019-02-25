var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        //constructors
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            //public properties
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
                this.HighScoreLabel.text = "High cores: " + this._highscores;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new objects.Label("Lives: ", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999 ", "20px", "Consolas", "#FFFF00", 640, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: ", "40px", "Consolas", "#FFFF00", 320, 10, true);
            this.Lives = 5;
            this.Score = 0;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map