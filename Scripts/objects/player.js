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
            _this.Start();
            return _this;
        }
        Player.prototype._animationEnd = function () {
            this.alpha = 1;
            this.planeflash.alpha = 0;
        };
        Player.prototype.Start = function () {
            this.planeflash = new objects.PlaneAfterCrash(); //1
            this.planeflash.alpha = 0; //1
            this.planeflash.on("animationend", this._animationEnd.bind(this), false); //1
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 1024; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 250; //kiero k el avion comienze en el medio de mi eje y
            this._shootOrigin = new math.Vec2();
        };
        Player.prototype.Update = function () {
            this.Move();
            // checking the bottom boundary
            if (this.y >= 600 - this.HalfHeight) {
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
            managers.Game.xPlayer = this.x;
            managers.Game.yPlayer = this.y;
            this.ShootFire();
        };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = true;
                managers.Game.goingDown = false;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = false;
                managers.Game.goingDown = true;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 4;
                managers.Game.goingLeft = true;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = false;
                managers.Game.goingDown = false;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = true;
                managers.Game.goingUp = false;
                managers.Game.goingDown = false;
            }
            this.Gravity();
            this.planeflash.x = this.x;
            this.planeflash.y = this.y;
            this.planeflash.regX = this.regX;
            this.planeflash.regY = this.regY;
        };
        Player.prototype.Gravity = function () {
            if (managers.Game.goingLeft) {
                this.x -= 2;
            }
            if (managers.Game.goingRigth) {
                this.x += 2;
            }
            if (managers.Game.goingUp) {
                this.y -= 2;
            }
            if (managers.Game.goingDown) {
                this.y += 2;
            }
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Destroy = function () {
        };
        Player.prototype.ShootFire = function () {
            if ((this.alpha = 1)) {
                //esto significa k estoy viva
                var ticker = createjs.Ticker.getTicks();
                if (managers.Game.keyboardManager.shoot && ticker % 10 == 0) {
                    //how many frames when i fire my ticker
                    this._shootOrigin = new math.Vec2(this.x, this.y - this.HalfHeight);
                    var currentshot = managers.Game.shootManager.CurrentShoot;
                    var shoot = managers.Game.shootManager.Shoots[currentshot];
                    shoot.x = this._shootOrigin.x;
                    shoot.y = this._shootOrigin.y;
                    managers.Game.shootManager.CurrentShoot++;
                    if (managers.Game.shootManager.CurrentShoot > 29) {
                        managers.Game.shootManager.CurrentShoot = 0;
                    }
                    if (managers.Game.goingLeft) {
                        if (managers.Game.shootManager.swi == 0) {
                            shoot.y = this.y - 40;
                            managers.Game.shootManager.swi = 1;
                        }
                        else {
                            shoot.y = this.y + 35;
                            managers.Game.shootManager.swi = 0;
                        }
                        shoot.x = this.x - 10;
                    }
                    if (managers.Game.goingRigth) {
                        if (managers.Game.shootManager.swi == 0) {
                            shoot.y = this.y - 40;
                            managers.Game.shootManager.swi = 1;
                        }
                        else {
                            shoot.y = this.y + 35;
                            managers.Game.shootManager.swi = 0;
                        }
                        shoot.x = this.x + 10;
                    }
                    if (managers.Game.goingDown) {
                        if (managers.Game.shootManager.swi == 0) {
                            shoot.x = this.x - 35;
                            managers.Game.shootManager.swi = 1;
                        }
                        else {
                            shoot.x = this.x + 35;
                            managers.Game.shootManager.swi = 0;
                        }
                        shoot.y = this.y - 10;
                    }
                    if (managers.Game.goingUp) {
                        if (managers.Game.shootManager.swi == 0) {
                            shoot.x = this.x - 35;
                            managers.Game.shootManager.swi = 1;
                        }
                        else {
                            shoot.x = this.x + 35;
                            managers.Game.shootManager.swi = 0;
                        }
                        shoot.y = this.y - 10;
                    }
                    createjs.Sound.play("shootSound");
                }
            }
        };
        return Player;
    }(objects.AbstractGameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map