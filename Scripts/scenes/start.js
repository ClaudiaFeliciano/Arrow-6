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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructor
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Start.prototype.Start = function () {
            this._space = new objects.Space();
            this._nameGame = new objects.Button("arrow", 380, 240, true);
            this._startButton = new objects.Button("play", 380, 360, true);
            this._restartButton = new objects.Button("restart", 380, 450, true);
            console.log(this._space);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._space.Update();
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this._space);
            this.addChild(this._nameGame);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map