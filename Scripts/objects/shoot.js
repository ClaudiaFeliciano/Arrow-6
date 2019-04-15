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
    var Shoot = /** @class */ (function (_super) {
        __extends(Shoot, _super);
        // constructor
        function Shoot() {
            var _this = _super.call(this, "shot") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Shoot.prototype, "Direction", {
            get: function () {
                return this._direction;
            },
            set: function (newDirection) {
                this._direction = newDirection;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shoot.prototype, "IsInPlay", {
            get: function () {
                return this._isInPlay;
            },
            set: function (newState) {
                this._isInPlay = newState;
                if (!this._isInPlay) {
                    this.Reset();
                }
                this._velocity = math.Vec2.Mulitply(this.Direction, this._speed);
            },
            enumerable: true,
            configurable: true
        });
        // public methods
        Shoot.prototype.Reset = function () {
            this.x = -2000;
            this.y = -2000;
            if (managers.Game.goingDown) {
                this.Direction = math.Vec2.down();
            }
            if (managers.Game.goingUp) {
                this.Direction = math.Vec2.up();
            }
            if (managers.Game.goingLeft) {
                this.Direction = math.Vec2.left();
                this.y = this.y - 40;
            }
            if (managers.Game.goingRigth) {
                this.Direction = math.Vec2.right();
            }
            this._updatePosition();
            // this.Direction = math.Vec2.zero();
        };
        Shoot.prototype._animationEnded = function () {
            this.alpha = 1;
            this.off("animationend", this._animationEnded.bind(this), false); //remove my event listener
        };
        Shoot.prototype.Start = function () {
            this._speed = 15;
            this.IsInPlay = false;
            // this.Reset();
        };
        Shoot.prototype.Update = function () {
            if (this.IsInPlay) {
                this.Move();
                this.CheckBounds();
            }
        };
        Shoot.prototype.Destroy = function () { };
        Shoot.prototype.Move = function () {
            if (managers.Game.goingLeft) {
                this.x += this.HalfHeight;
            }
            if (managers.Game.goingRigth) {
                this.x -= this.HalfHeight;
            }
            if (managers.Game.goingUp) {
                this.y += this.HalfHeight;
            }
            if (managers.Game.goingDown) {
                this.y -= this.HalfHeight;
            }
            this._updatePosition();
            this.Position = math.Vec2.Add(this.Position, this._velocity);
            this.x = this.Position.x;
            this.y = this.Position.y;
        };
        Shoot.prototype.CheckBounds = function () {
            /*  if (this.x <= -this.Height) {
                this.Reset();*/
            if (this.y <= -this.Height) {
                this.IsInPlay = false;
                this.Reset();
            }
            if (this.x <= -this.Width) {
                this.IsInPlay = false;
                this.Reset();
            }
        };
        return Shoot;
    }(objects.AbstractGameObject));
    objects.Shoot = Shoot;
})(objects || (objects = {}));
//# sourceMappingURL=shoot.js.map