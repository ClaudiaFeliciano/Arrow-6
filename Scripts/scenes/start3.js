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
    var Start3 = /** @class */ (function (_super) {
        __extends(Start3, _super);
        // constructor
        function Start3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Start3.prototype.Start = function () {
            this._space = new objects.Space();
            this._level2 = new objects.Button("level3", 497.5, 200, true);
            this._startButton = new objects.Button("start", 487.5, 360, true);
            this._restartButton = new objects.Button("replay", 487.5, 424, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.4;
            this.Main();
        };
        Start3.prototype.Update = function () {
            this._space.Update();
        };
        Start3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start3.prototype.Reset = function () { };
        Start3.prototype.Main = function () {
            var _this = this;
            this.addChild(this._space);
            this.addChild(this._level2);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY3;
                _this._engineSound.stop();
            });
        };
        return Start3;
    }(objects.Scene));
    scenes.Start3 = Start3;
})(scenes || (scenes = {}));
//# sourceMappingURL=start3.js.map