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
        Object.defineProperty(Player.prototype, "BulletSpawn", {
            // public properties
            get: function () {
                return this._bulletSpawn;
            },
            set: function (newSpawnPoint) {
                this._bulletSpawn = newSpawnPoint;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype._animationEnd = function () {
            this.alpha = 1;
            this.planeflash.alpha = 0;
        };
        Player.prototype.Start = function () {
            this.planeflash = new objects.PlaneAfterCrash();
            this.planeflash.alpha = 0;
            this.planeflash.on("animationend", this._animationEnd.bind(this), false);
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 1000;
            this.y = 300;
            // this._shootOrigin = new math.Vec2();
        };
        Player.prototype.Update = function () {
            this.Move();
            this._updatePosition();
            this.BulletSpawn = new math.Vec2(this.x - 6, this.y - this.HalfHeight - 2);
            // checking the bottom boundary
            if (this.y >= 549 - this.HalfHeight) {
                //600 minus the high of the scorebar
                this.y = 549 - this.HalfHeight;
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
            //  this.ShootFire();
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
            this.planeflash.rotation = this.rotation;
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
        return Player;
    }(objects.AbstractGameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map