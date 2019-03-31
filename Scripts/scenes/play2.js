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
    var Play2 = /** @class */ (function (_super) {
        __extends(Play2, _super);
        // constructor
        function Play2() {
            var _this = _super.call(this) || this;
            _this.xposition = 750;
            _this.Start();
            return _this;
        }
        Play2.prototype.refreshLifes = function () {
            for (var count = 0; count < this._scoreBoard.Lives; count++) {
                var life = new objects.LifeBox();
                if (count == 0) {
                    life.x = this.xposition;
                    life.y = 558;
                    this.addChild(life);
                    this.xposition += 50;
                }
                else {
                    life.x = this.xposition;
                    life.y = 558;
                    this.addChild(life);
                    this.xposition += 50;
                }
                console.log(life);
            }
        };
        // public methods
        Play2.prototype.Start = function () {
            this._numero = 3;
            this._bigmeteorNum = 3;
            this._space = new objects.Space();
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this._player = new objects.Player();
            managers.Game.player = this._player;
            this._planelife = new Array();
            this.board = new objects.BoardBar();
            this._enemy = new Array();
            for (var count = 0; count < this._numero; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._bigmeteor = new Array();
            for (var count = 0; count < this._bigmeteorNum; count++) {
                this._bigmeteor[count] = new objects.BigMeteor();
            }
            this._smallmeteor = new Array();
            for (var count = 0; count < this._numero; count++) {
                this._smallmeteor[count] = new objects.SmallMeteor();
            }
            this._meteor = new Array();
            for (var count = 0; count < this._numero; count++) {
                this._meteor[count] = new objects.Meteor();
            }
            this._brouncerock = new Array();
            for (var count = 0; count < this._numero; count++) {
                this._brouncerock[count] = new objects.BrounceRock();
            }
            this._engineSound = createjs.Sound.play("gameSound");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.1;
            /* this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;*/
            this._shotManager = new managers.Shoot();
            managers.Game.shootManager = this._shotManager;
            this.Main();
        };
        Play2.prototype.Update = function () {
            var _this = this;
            this._space.Update();
            this._player.Update();
            this._shotManager.Update();
            this.board.Update();
            for (var _i = 0, _a = this._enemy; _i < _a.length; _i++) {
                var enemy = _a[_i];
                enemy.Update();
                managers.Collision.Check(this._player, enemy);
            }
            for (var _b = 0, _c = this._bigmeteor; _b < _c.length; _b++) {
                var bigmeteor = _c[_b];
                bigmeteor.Update();
                managers.Collision.Check(this._player, bigmeteor);
            }
            for (var _d = 0, _e = this._smallmeteor; _d < _e.length; _d++) {
                var smallmeteor = _e[_d];
                smallmeteor.Update();
                managers.Collision.Check(this._player, smallmeteor);
            }
            for (var _f = 0, _g = this._brouncerock; _f < _g.length; _f++) {
                var brouncerock = _g[_f];
                brouncerock.Update();
                managers.Collision.Check(this._player, brouncerock);
            }
            // Update Each meteor in the Meteor Array
            for (var _h = 0, _j = this._meteor; _h < _j.length; _h++) {
                var meteor = _j[_h];
                meteor.Update();
                managers.Collision.Check(this._player, meteor);
            }
            this._shotManager.Update();
            this._shotManager.Shoots.forEach(function (bullet) {
                _this._enemy.forEach(function (enemy) {
                    managers.Collision.Check(bullet, enemy);
                });
            });
            //////**********RULES -LEVEL2- RULES -LEVEL2- RULES -LEVEL2- RULES -LEVEL2- RULES***************////////
            //if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                managers.Game.currentState = config.Scene.OVER;
            }
            if (this._scoreBoard.Score >= 200 && this._scoreBoard.Lives >= 0) {
                this._engineSound.stop();
                managers.Game.currentState = config.Scene.START3;
                managers.Game.scoreBoard.Level += 1;
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
        Play2.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play2.prototype.Reset = function () { };
        Play2.prototype.Main = function () {
            var _this = this;
            this.addChild(this._space);
            this.addChild(this._player);
            createjs.Tween.get(this._player, { loop: 0 }).to({ x: 800, y: 300 }, 1000);
            this.addChild(this._player.planeflash);
            for (var _i = 0, _a = this._enemy; _i < _a.length; _i++) {
                var enemy = _a[_i];
                this.addChild(enemy);
                createjs.Tween.get(enemy, { loop: 0 })
                    .wait(500)
                    .to({
                    x: -enemy.Width,
                    y: Math.floor(Math.random() * (500 - enemy.Height))
                }, 1000);
            }
            this._shotManager.Shoots.forEach(function (shoot) {
                _this.addChild(shoot);
            });
            for (var _b = 0, _c = this._bigmeteor; _b < _c.length; _b++) {
                var bigmeteor = _c[_b];
                this.addChild(bigmeteor);
                // Delay for the BigMetteor
                createjs.Tween.get(bigmeteor, { loop: 0 })
                    .wait(3000)
                    .to({
                    x: -bigmeteor.Width,
                    y: Math.floor(Math.random() * (1024 - bigmeteor.Height) + bigmeteor.HalfHeight)
                }, 1000);
            }
            for (var _d = 0, _e = this._smallmeteor; _d < _e.length; _d++) {
                var smallmeteor = _e[_d];
                this.addChild(smallmeteor);
                createjs.Tween.get(smallmeteor, { loop: 0 })
                    .wait(5000)
                    .to({ x: smallmeteor.Height, y: -smallmeteor.Height }, 2000);
            }
            for (var _f = 0, _g = this._brouncerock; _f < _g.length; _f++) {
                var brouncerock = _g[_f];
                this.addChild(brouncerock);
                createjs.Tween.get(brouncerock, { loop: 0 })
                    .wait(6000)
                    .to({ x: -brouncerock.Width, y: 200 }, 2000);
            }
            this._meteor.forEach(function (meteor) {
                _this.addChild(meteor);
                createjs.Tween.get(meteor, { loop: 0 })
                    .wait(5000)
                    .to({
                    x: -meteor.Width,
                    y: Math.floor(Math.random() * (1024 - meteor.Height) + meteor.HalfHeight)
                }, 5000);
            });
            this.addChild(this.board);
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._scoreBoard.LevelLabel);
            this.refreshLifes();
        };
        return Play2;
    }(objects.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));
//# sourceMappingURL=play2.js.map