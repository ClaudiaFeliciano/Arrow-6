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
    var SmallMeteor = /** @class */ (function (_super) {
        __extends(SmallMeteor, _super);
        // constructor
        function SmallMeteor() {
            var _this = _super.call(this, "smallmeteor") || this;
            _this.Start();
            return _this;
        }
        // private methods
        SmallMeteor.prototype._move = function () {
            this.y += this._horizontalSpeed;
        };
        SmallMeteor.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width || this.y > 600 + this.Height) {
                this.Reset();
            }
        };
        SmallMeteor.prototype.Reset = function () {
            this._horizontalSpeed = 2;
            this.x = Math.floor(Math.random() * (1024 - this.Width) + this.HalfWidth);
            this.y = -this.Height;
            this.alpha = 1;
        };
        SmallMeteor.prototype.Start = function () {
            this.Reset();
        };
        SmallMeteor.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        SmallMeteor.prototype.Destroy = function () { };
        return SmallMeteor;
    }(objects.AbstractGameObject));
    objects.SmallMeteor = SmallMeteor;
})(objects || (objects = {}));
//# sourceMappingURL=smallmeteor.js.map