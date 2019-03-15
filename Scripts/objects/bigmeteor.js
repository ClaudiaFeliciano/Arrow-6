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
    var BigMeteor = /** @class */ (function (_super) {
        __extends(BigMeteor, _super);
        // public properties
        // constructor
        function BigMeteor() {
            var _this = _super.call(this, "a10000") || this;
            _this.Start();
            return _this;
        }
        // private methods
        BigMeteor.prototype._move = function () {
            this.x += this._verticalSpeed; //i want my meteor to move not ony vertical but also horizontal
            this.y += this._horizontalSpeed;
        };
        BigMeteor.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        BigMeteor.prototype.Reset = function () {
            this._verticalSpeed = 1;
            this._horizontalSpeed = 1;
            this.x = this.Width; //de donde kiero k comience
            this.y = Math.floor(Math.random() * (1024 - this.Height) + this.HalfHeight);
            this.alpha = 1;
        };
        BigMeteor.prototype.Start = function () {
            this.Reset();
        };
        BigMeteor.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        BigMeteor.prototype.Destroy = function () { };
        return BigMeteor;
    }(objects.AbstractGameObject));
    objects.BigMeteor = BigMeteor;
})(objects || (objects = {}));
//# sourceMappingURL=bigmeteor.js.map