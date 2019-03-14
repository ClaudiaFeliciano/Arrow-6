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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // constructors
        function Player() {
            var _this = _super.call(this, "player") || this;
            // private instance variables
            //private _shootOrigin: math.Vec2;
            _this._leftGravity = false;
            _this._rigtGravity = false;
            _this._upGravity = false;
            _this._downGravity = false;
            _this.Start();
            return _this;
        }
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 1024; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 250; //kiero k el avion comienze en el medio de mi eje y
            //this._shootOrigin = new math.Vec2();
        };
        Player.prototype.Update = function () {
            this.Move();
            // checking the bottom boundary
            if (this.y >= 600 - this.HalfHeight) {
                //it is not responsive.If I want to fo that i should add a configuration file
                this.y = 600 - this.HalfHeight;
            }
            // checking the top boundary
            if (this.y <= this.HalfHeight) {
                this.y = this.HalfHeight;
            }
            // Check right boundary
            if (this.x >= 1024 - this.HalfWidth) {
                this.x = 1024 - this.HalfWidth;
            }
            // Check left boundary
            if (this.x <= this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            this.ShootFire();
        };
        Player.prototype.Move = function () {
            //mouse control
            //this.y = managers.Game.stage.mouseY;//where the y-coordinate of my plane is gonna be on my x-coordinate.
            //My plane is not allowed go right left with my mouse
            //keyboard control
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= 4;
                this._leftGravity = false;
                this._rigtGravity = false;
                this._upGravity = true;
                this._downGravity = false;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += 4;
                this._leftGravity = false;
                this._rigtGravity = false;
                this._upGravity = false;
                this._downGravity = true;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 4;
                this._leftGravity = true;
                this._rigtGravity = false;
                this._upGravity = false;
                this._downGravity = false;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 4;
                this._leftGravity = false;
                this._rigtGravity = true;
                this._upGravity = false;
                this._downGravity = false;
            }
            this.Gravity();
        };
        Player.prototype.Gravity = function () {
            if (this._leftGravity) {
                this.x -= 2;
            }
            if (this._rigtGravity) {
                this.x += 2;
            }
            if (this._upGravity) {
                this.y -= 2;
            }
            if (this._downGravity) {
                this.y += 2;
            }
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Destroy = function () { };
        Player.prototype.ShootFire = function () {
            if ((this.alpha = 1)) {
                //esto significa k estoy alive
                var ticker = createjs.Ticker.getTicks();
                if (managers.Game.keyboardManager.shoot && ticker % 10 == 0) {
                    //how many frames when i fire my ticker
                    //this._shootOrigin = new math.Vec2(this.x, this.y -this.Height-2)
                    var currentshot = managers.Game.shootManager.CurrentShoot; //call a shoot into being
                    var shoot = managers.Game.shootManager.Shoots[currentshot];
                    if (managers.Game.shootManager.swi == 0) {
                        shoot.y = this.y - 40;
                        managers.Game.shootManager.swi = 1;
                    }
                    else {
                        shoot.y = this.y + 35;
                        managers.Game.shootManager.swi = 0;
                    }
                    shoot.x = this.x + -10; // desde donde va a salir el shoot
                    createjs.Sound.play("shootSound");
                    managers.Game.shootManager.CurrentShoot++;
                    if (managers.Game.shootManager.CurrentShoot > 49) {
                        managers.Game.shootManager.CurrentShoot = 0;
                    }
                }
                /*let boom = new objects.Boom();
                                boom.x = object2.x - object2.Width;
                                boom.y = object2.y - object2.Height;
                                managers.Game.sceneObject.addChild(boom);*/
            }
        };
        return Player;
    }(objects.AbstractGameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map