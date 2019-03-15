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
    var PlayLevel2 = /** @class */ (function (_super) {
        __extends(PlayLevel2, _super);
        // constructor
        function PlayLevel2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        PlayLevel2.prototype.Start = function () {
            this._meteorNum = 5;
            this._bigmeteorNum = 2;
            this._bigmeteor = new Array();
            for (var count = 0; count < this._bigmeteorNum; count++) {
                this._bigmeteor[count] = new objects.BigMeteor();
            }
            // Instantiates a new Array container of Type objects.meteor
            this._meteor = new Array();
            // Fill the meteor Array with meteors
            for (var count = 0; count < this._meteorNum; count++) {
                this._meteor[count] = new objects.Meteor();
            }
            this._engineSound = createjs.Sound.play("gameSound"); //lo pongo akip ara que comience en cuanto comience la scence
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
        PlayLevel2.prototype.Update = function () {
            this._space.Update();
            this._player.Update();
            this._enemy.Update();
            this._shotManager.Update();
            //check collision between arrow and island
            managers.Collision.Check(this._player, this._enemy);
            for (var _i = 0, _a = this._bigmeteor; _i < _a.length; _i++) {
                var bigmeteor = _a[_i];
                bigmeteor.Update();
                managers.Collision.Check(this._player, bigmeteor);
            }
            // Update Each meteor in the Meteor Array
            for (var _b = 0, _c = this._meteor; _b < _c.length; _b++) {
                var meteor = _c[_b];
                meteor.Update();
                //check collision between arrow and meteor
                managers.Collision.Check(this._player, meteor); //check collision between the arrow and the meteor
            }
            for (var _d = 0, _e = this._shotManager.Shoots; _d < _e.length; _d++) {
                var shoot = _e[_d];
                //  shoot.Update();
                managers.Collision.Check(this._enemy, shoot);
            }
            //if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop(); //sino me sigue sonando the app
                managers.Game.currentState = config.Scene.OVER;
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
        PlayLevel2.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        PlayLevel2.prototype.Reset = function () { };
        PlayLevel2.prototype.Main = function () {
            var _this = this;
            // adds space to the scene
            this._space = new objects.Space();
            this.addChild(this._space);
            // adds enemy to the scene
            this._enemy = new objects.Enemy();
            this.addChild(this._enemy);
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
            this._meteor.forEach(function (meteor) {
                _this.addChild(meteor);
            });
            //add scoreboard labels to the scene
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return PlayLevel2;
    }(objects.Scene));
    scenes.PlayLevel2 = PlayLevel2;
})(scenes || (scenes = {}));
//# sourceMappingURL=playlevel2.js.map