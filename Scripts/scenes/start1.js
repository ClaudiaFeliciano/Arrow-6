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
    var Start1 = /** @class */ (function (_super) {
        __extends(Start1, _super);
        // constructor
        function Start1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Start1.prototype.Start = function () {
            this._spacebackground = new objects.StartBackground();
            this._nameGame = new objects.Button("ArrowGame", 775.5, 100, true);
            this._startButton = new objects.Button("start", 765.5, 200, true);
            this._informationButton = new objects.Button("info", 980.5, 496, true);
            this._musicButton = new objects.Button("music", 980.5, 566, true);
            // this._restartButton = new objects.Button("exit", 765.5, 300, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 1.0;
            this.Main();
        };
        Start1.prototype.Update = function () {
            this._spacebackground.Update();
        };
        Start1.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start1.prototype.Reset = function () { };
        Start1.prototype.Main = function () {
            var _this = this;
            this.addChild(this._spacebackground);
            //this.addChild(this._window);
            this.addChild(this._nameGame);
            this.addChild(this._startButton);
            this.addChild(this._informationButton);
            this._informationButton.on("click", function () {
                managers.Game.currentState = config.Scene.INFORMATION;
            });
            this.addChild(this._musicButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY1;
                3;
                _this._engineSound.stop();
            });
            console.log("TCL: Start1 -> this._engineSound.volume", this._engineSound.volume);
            this._musicButton.on("click", function () {
                if (_this._engineSound.volume == 1.0) {
                    _this._engineSound.volume = 0.0;
                }
                else {
                    _this._engineSound.volume = 1.0;
                }
            });
        };
        return Start1;
    }(objects.Scene));
    scenes.Start1 = Start1;
})(scenes || (scenes = {}));
//# sourceMappingURL=start1.js.map