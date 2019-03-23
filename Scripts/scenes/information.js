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
    var Information = /** @class */ (function (_super) {
        __extends(Information, _super);
        // constructor
        function Information() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Information.prototype.Start = function () {
            this._startbackground = new objects.StartBackground();
            this._boardinf = new objects.BoardInformation();
            this._informationLabel = new objects.Button("information", 505.5, 140, true);
            this._startButton = new objects.Button("start", 555.5, 500, true);
            this._musicButton = new objects.Button("music", 980.5, 566, true);
            this._exitButton = new objects.Button("exit", 760.5, 500, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.0;
            this.Main();
        };
        Information.prototype.Update = function () {
            this._startbackground.Update();
        };
        Information.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Information.prototype.Reset = function () {
        };
        Information.prototype.Main = function () {
            var _this = this;
            this.addChild(this._startbackground);
            this.addChild(this._boardinf);
            this.addChild(this._informationLabel);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);
            this.addChild(this._musicButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY1;
                _this._engineSound.stop();
            });
            this._exitButton.on("click", function () {
                managers.Game.currentState = config.Scene.START1;
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
        return Information;
    }(objects.Scene));
    scenes.Information = Information;
})(scenes || (scenes = {}));
//# sourceMappingURL=information.js.map