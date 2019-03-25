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
    var RedEnemy = /** @class */ (function (_super) {
        __extends(RedEnemy, _super);
        // constructor
        function RedEnemy() {
            var _this = _super.call(this, "redEnemy") || this;
            // public properties
            _this.yRed = 0;
            _this.xRed = 0;
            _this.Start();
            return _this;
        }
        // private methods
        RedEnemy.prototype._move = function () {
            this.y += this._vSpeed;
        };
        RedEnemy.prototype._checkBounds = function () {
            if (this.y > 560 - this.Height) {
                this._vSpeed = -2;
            }
            if (this.y < 180 - this.Height) {
                this._vSpeed = 2;
            }
        };
        // public methods
        RedEnemy.prototype.Start = function () {
            this._vSpeed = 2;
            this.x = 500;
            this.y = -200;
            this.yRed = this.y;
        };
        RedEnemy.prototype.Update = function () {
            this.yRed = this.y;
            this.xRed = this.x;
            managers.Game.yRedEnemy = this.yRed;
            managers.Game.xRedEnemy = this.xRed;
            this._move();
            this._checkBounds();
        };
        RedEnemy.prototype.Destroy = function () { };
        RedEnemy.prototype.Reset = function () { };
        return RedEnemy;
    }(objects.AbstractGameObject));
    objects.RedEnemy = RedEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=redenemy.js.map