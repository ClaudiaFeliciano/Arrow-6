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
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructor
        function Over() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Over.prototype._restartButtonClick = function () {
            managers.Game.currentState = config.Scene.PLAY;
        };
        // public methods
        Over.prototype.Start = function () {
            this._space = new objects.Space();
            this._gameOver = new objects.Button("gameOver", 497.5, 200, true);
            this._restartButton = new objects.Button("replay", 565.5, 445, true);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        Over.prototype.Update = function () {
            this._space.Update();
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Over.prototype.Reset = function () {
        };
        Over.prototype.Main = function () {
            // adds ocean to the stage     
            this.addChild(this._space);
            this.addChild(this._gameOver);
            this.addChild(this._restartButton);
            //add scoreboard to the scence
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = managers.Game.highScore;
            this._restartButton.on("click", this._restartButtonClick);
            // restart the play scene    
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map