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
        // public methods
        Shoot.prototype.Reset = function () {
            this.x = -2000;
            this.y = -2000;
        };
        Shoot.prototype._animationEnded = function () {
            this.alpha = 1;
            this.off("animationend", this._animationEnded.bind(this), false); //remove my event listener
        };
        Shoot.prototype.Start = function () {
            this.alpha = 1;
            this.HalfWidth = 0; // duda
            this.HalfHeight = -10; // duda
            this.on("animationend", this._animationEnded.bind(this), false);
            this.Reset();
        };
        Shoot.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
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
        };
        Shoot.prototype.CheckBounds = function () {
            /*  if (this.x <= -this.Height) {
                this.Reset();*/
            if (this.y <= -this.Height) {
                this.Reset();
            }
            if (this.x <= -this.Width) {
                this.Reset();
            }
        };
        return Shoot;
    }(objects.AbstractGameObject));
    objects.Shoot = Shoot;
})(objects || (objects = {}));
//# sourceMappingURL=shoot.js.map