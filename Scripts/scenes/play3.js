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
            this.board = new objects.BoardBar();
            this._player = new objects.Player();
            this._redenemy = new objects.RedEnemy();
            this._boss = new objects.Boss();
            managers.Game.player = this._player;
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
        //Triggered every frame
        Play3.prototype.Update = function () {
            this._space.Update();
            this._player.Update();
            this.board.Update();
            this._shotManager.Update();
            this._shotManager.Shoots.forEach(function (bullet) {
                // managers.Collision.Check(bullet, this._sonEnemy);
                // managers.Collision.Check(bullet, this._redenemy);
            });
            this._redenemy.Update();
            managers.Collision.Check(this._player, this._redenemy);
            this._boss.Update();
            managers.Collision.Check(this._player, this._boss);
            this._sonEnemy.Update();
            // managers.Collision.Check(this._player, this._sonEnemy);
            for (var _i = 0, _a = this._meteor; _i < _a.length; _i++) {
                var meteor = _a[_i];
                meteor.Update();
                managers.Collision.Check(this._player, meteor);
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
            this.addChild(this._player);
            this.addChild(this._player.planeflash);
            this.addChild(this._redenemy);
            this.addChild(this._boss);
            this._sonEnemy = new objects.SonEnemy();
            this.addChild(this._sonEnemy);
            createjs.Tween.get(this._sonEnemy, { loop: 0 })
                // .wait(7100)
                .wait(100)
                .to({ x: 300, y: 270 }, 1000);
            // createjs.Tween.get(this._player, { loop: 0 })
            //   // .wait(6000)
            //   // .wait(100)
            //   .to({ x: 800, y: 300 }, 1500);
            this._meteor.forEach(function (meteor) {
                _this.addChild(meteor);
                createjs.Tween.get(meteor, { loop: 0 })
                    .wait(10000)
                    .to({
                    x: -meteor.Width,
                    y: Math.random() * (1024 - meteor.Height) + meteor.HalfHeight
                });
            });
            this._shotManager.Shoots.forEach(function (shoot) {
                _this.addChild(shoot);
            });
            this.addChild(this.board);
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return Play3;
    }(objects.Scene));
    scenes.Play3 = Play3;
})(scenes || (scenes = {}));
//# sourceMappingURL=play3.js.map