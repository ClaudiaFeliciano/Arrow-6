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
                this.HighScoreLabel.text = "High scores: " + this._highscores;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new objects.Label("Lives: ", "20px", "Consolas", "#FFF000", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999 ", "20px", "Consolas", "#FFF000", 740, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: ", "30px", "Consolas", "#FFF000", 477.5, 260, true);
            // this._livescoin = new objects.Live(); 
            this.Lives = 5;
            this.Score = 0;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map