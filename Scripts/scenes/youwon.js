var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var YouWon = /** @class */ (function (_super) {
        __extends(YouWon, _super);
        // public properties
        // constructor
        function YouWon() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        YouWon.prototype._restartButtonClick = function () {
            managers.Game.currentState = config.Scene.PLAY1;
        };
        // public methods
        YouWon.prototype.Start = function () {
            this._space = new objects.Space();
            this._youwon = new objects.Button("youwon", 497.5, 200, true);
            this._restartButton = new objects.Button("replay", 500.5, 445, true);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        YouWon.prototype.Update = function () {
            this._space.Update();
        };
        YouWon.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        YouWon.prototype.Reset = function () { };
        YouWon.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._space);
            this.addChild(this._youwon);
            this.addChild(this._restartButton);
            //add scoreboard to the scence
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = managers.Game.highScore;
            this._restartButton.on("click", this._restartButtonClick);
            managers.Game.currentState = config.Scene.PLAY1;
        };
        return YouWon;
    }(objects.Scene));
    scenes.YouWon = YouWon;
})(scenes || (scenes = {}));
//# sourceMappingURL=youwon.js.map