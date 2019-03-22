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
            _this.Start();
            return _this;
        }
        // public methods
        Play2.prototype.Start = function () {
            this._bigmeteorNum = 3;
            this._bigmeteor = new Array();
            for (var count = 0; count < this._bigmeteorNum; count++) {
                this._bigmeteor[count] = new objects.BigMeteor();
            }
            this._numero = 5;
            this._smallmeteor = new Array();
            for (var count = 0; count < this._numero; count++) {
                this._smallmeteor[count] = new objects.SmallMeteor();
            }
            // Instantiates a new Array container of Type objects.meteor
            this._meteor = new Array();
            // Fill the meteor Array with meteors
            for (var count = 0; count < this._numero; count++) {
                this._meteor[count] = new objects.Meteor();
            }
            this._engineSound = createjs.Sound.play("gameSound");
            this._engineSound.loop = -1; //play forever
            this._engineSound.volume = 0.1;
            //create the score board UI for the scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this._shotManager = new managers.Shoot();
            managers.Game.shootManager = this._shotManager;
            this.Main();
        };
        //triggered every frame
        Play2.prototype.Update = function () {
            this._space.Update();
            this._player.Update();
            this._enemy.Update();
            this._redenemy.Update();
            this._shotManager.Update();
            this._sonEnemy.Update();
            managers.Collision.Check(this._player, this._enemy);
            // Is not working
            managers.Collision.Check(this._player, this._redenemy);
            managers.Collision.Check(this._player, this._sonEnemy);
            for (var _i = 0, _a = this._bigmeteor; _i < _a.length; _i++) {
                var bigmeteor = _a[_i];
                bigmeteor.Update();
                managers.Collision.Check(this._player, bigmeteor);
            }
            for (var _b = 0, _c = this._smallmeteor; _b < _c.length; _b++) {
                var smallmeteor = _c[_b];
                smallmeteor.Update();
                //managers.Collision.Check(this._player, smallmeteor);
            }
            // Update Each meteor in the Meteor Array
            for (var _d = 0, _e = this._meteor; _d < _e.length; _d++) {
                var meteor = _e[_d];
                meteor.Update();
                //check collision between arrow and meteor
                managers.Collision.Check(this._player, meteor);
            }
            for (var _f = 0, _g = this._shotManager.Shoots; _f < _g.length; _f++) {
                var shoot = _g[_f];
                //  shoot.Update();
                managers.Collision.Check(this._enemy, shoot);
            }
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                managers.Game.currentState = config.Scene.OVER;
            }
            if (this._scoreBoard.Score >= 300 && this._scoreBoard.Lives >= 0) {
                this._engineSound.stop();
                managers.Game.currentState = config.Scene.START3;
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
            // adds space to the scene
            this._space = new objects.Space();
            this.addChild(this._space);
            // adds enemy to the scene
            this._enemy = new objects.Enemy();
            this.addChild(this._enemy);
            this._redenemy = new objects.RedEnemy();
            this.addChild(this._redenemy);
            this._sonEnemy = new objects.SonEnemy();
            this.addChild(this._sonEnemy);
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            createjs.Tween.get(this._player, { loop: 0 }).to({ x: 800, y: 300 }, 1000);
            this._shotManager.Shoots.forEach(function (shoot) {
                _this.addChild(shoot);
            });
            for (var _i = 0, _a = this._bigmeteor; _i < _a.length; _i++) {
                var bigmeteor = _a[_i];
                this.addChild(bigmeteor);
            }
            for (var _b = 0, _c = this._smallmeteor; _b < _c.length; _b++) {
                var smallmeteor = _c[_b];
                this.addChild(smallmeteor);
            }
            this._meteor.forEach(function (meteor) {
                _this.addChild(meteor);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return Play2;
    }(objects.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));
//# sourceMappingURL=play2.js.map