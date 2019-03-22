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
            /*this._window = new createjs.Bitmap("window");
                  this._window.x= 400;
                  this._window.y= 220;*/
            /*this._explosionNum = 5;
                  this._explosion = new Array<objects.ExplosionStart>();
                  for (let count = 0; count < this._explosionNum; count++) {
                    this._explosion[count] = new objects.ExplosionStart();
                  }*/
            this._nameGame = new objects.Button("ArrowGame", 497.5, 200, true);
            this._startButton = new objects.Button("start", 497.5, 360, true);
            this._settingButton = new objects.Button("settings", 425.5, 446, true);
            this._musicButton = new objects.Button("music", 565.5, 446, true);
            this._restartButton = new objects.Button("exit", 497.5, 524, true);
            this._engineSound = createjs.Sound.play("startSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.8;
            this.Main();
        };
        Start.prototype.Update = function () {
            this._space.Update();
            /*for (const explosion of this._explosion) {
                      explosion.Update();
      
                    }*/
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Reset = function () { };
        Start.prototype.Main = function () {
            var _this = this;
            this.addChild(this._space);
            //this.addChild(this._window);
            this.addChild(this._nameGame);
            this.addChild(this._startButton);
            this.addChild(this._restartButton);
            this.addChild(this._musicButton);
            this.addChild(this._settingButton);
            /*for (const explosion of this._explosion) {
                      this.addChild(explosion);
                    }
      */
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY1;
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
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map