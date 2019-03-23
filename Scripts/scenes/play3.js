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
    var Play3 = /** @class */ (function (_super) {
        __extends(Play3, _super);
        // constructor
        function Play3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Play3.prototype.Start = function () {
            this._engineSound = createjs.Sound.play("play3Sound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.3;
            this._playerEngineSound = createjs.Sound.play("playerEngine");
            this._playerEngineSound.volume = 1;
            this._meteorNum = 5;
            this._meteor = new Array();
            for (var count = 0; count < this._meteorNum; count++) {
                this._meteor[count] = new objects.Meteor();
            }
            //create the score board UI for the scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this._shotManager = new managers.Shoot();
            managers.Game.shootManager = this._shotManager;
            this.Main();
        };
        //triggered every frame
        Play3.prototype.Update = function () {
            this._space.Update();
            this._player.Update();
            this._enemy.Update();
            this._redenemy.Update();
            this._shotManager.Update();
            this._sonEnemy.Update();
            managers.Collision.Check(this._player, this._enemy);
            for (var _i = 0, _a = this._meteor; _i < _a.length; _i++) {
                var meteor = _a[_i];
                meteor.Update();
                managers.Collision.Check(this._player, meteor);
            }
            // Is not working
            managers.Collision.Check(this._player, this._redenemy);
            managers.Collision.Check(this._player, this._sonEnemy);
            for (var _b = 0, _c = this._shotManager.Shoots; _b < _c.length; _b++) {
                var shoot = _c[_b];
                managers.Collision.Check(this._enemy, shoot);
            }
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                this._playerEngineSound.stop();
                managers.Game.currentState = config.Scene.OVER;
            }
            if (this._scoreBoard.Score >= 300 && this._scoreBoard.Lives >= 0) {
                this._engineSound.stop();
                this._playerEngineSound.stop();
                managers.Game.currentState = config.Scene.WIN;
            }
            // right
            if (managers.Game.goingRigth) {
                this._player.rotation = 180;
            }
            // left
            if (managers.Game.goingLeft) {
                this._player.rotation = 0;
            }
            // down
            if (managers.Game.goingDown) {
                this._player.rotation = 270;
            }
            // Up
            if (managers.Game.goingUp) {
                this._player.rotation = 90;
            }
        };
        Play3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play3.prototype.Reset = function () { };
        Play3.prototype.Main = function () {
            var _this = this;
            // adds space to the scene
            this._space = new objects.Space();
            this.addChild(this._space);
            this._enemy = new objects.Enemy();
            this.addChild(this._enemy);
            this._redenemy = new objects.RedEnemy();
            this.addChild(this._redenemy);
            this._sonEnemy = new objects.SonEnemy();
            this.addChild(this._sonEnemy);
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            createjs.Tween.get(this._player, { loop: 0 }).to({ x: 800, y: 300 }, 1300);
            this._shotManager.Shoots.forEach(function (shoot) {
                _this.addChild(shoot);
            });
            this._meteor.forEach(function (meteor) {
                _this.addChild(meteor);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return Play3;
    }(objects.Scene));
    scenes.Play3 = Play3;
})(scenes || (scenes = {}));
//# sourceMappingURL=play3.js.map