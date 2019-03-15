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
    var StartLevel2 = /** @class */ (function (_super) {
        __extends(StartLevel2, _super);
        // constructor
        function StartLevel2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        StartLevel2.prototype.Start = function () {
            this._space = new objects.Space();
            this._nameGame = new objects.Button("ArrowGame", 497.5, 200, true);
            this._startButton = new objects.Button("start", 497.5, 360, true);
            this._settingButton = new objects.Button("settings", 425.5, 446, true);
            this._musicButton = new objects.Button("music", 565.5, 446, true);
            this._restartButton = new objects.Button("exit", 497.5, 524, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 1.0;
            this.Main();
        };
        StartLevel2.prototype.Update = function () {
            this._space.Update();
        };
        StartLevel2.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        StartLevel2.prototype.Reset = function () {
        };
        StartLevel2.prototype.Main = function () {
            var _this = this;
            this.addChild(this._space);
            this.addChild(this._nameGame);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);
            this.addChild(this._musicButton);
            this.addChild(this._settingButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
                _this._engineSound.stop();
            });
            this._musicButton.on("click", function () {
                if (_this._engineSound.volume != 0.0) {
                    _this._engineSound.volume -= 0.2;
                }
                else if (_this._engineSound.volume <= 0.0) {
                    _this._engineSound.volume = 1.0;
                }
            });
        };
        return StartLevel2;
    }(objects.Scene));
    scenes.StartLevel2 = StartLevel2;
})(scenes || (scenes = {}));
//# sourceMappingURL=startlevel2.js.map