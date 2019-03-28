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
    var BrounceRock = /** @class */ (function (_super) {
        __extends(BrounceRock, _super);
        function BrounceRock() {
            var _this = _super.call(this, "brouncerock") || this;
            _this.Start();
            return _this;
        }
        BrounceRock.prototype._move = function () {
            this.x += this._verticalSpeed; //i want my meteor to move not ony vertical but also horizontal
            this.y += this._horizontalSpeed;
        };
        BrounceRock.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        BrounceRock.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 2 + 1);
            this._horizontalSpeed = Math.floor(Math.random() * 2 - 1);
            this.x = -this.Width;
            this.y = Math.floor(Math.random() * (1024 - this.Height) + this.HalfHeight);
            this.alpha = 1;
        };
        BrounceRock.prototype.Start = function () {
            this.Reset();
        };
        BrounceRock.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        BrounceRock.prototype.Destroy = function () { };
        return BrounceRock;
    }(objects.AbstractGameObject));
    objects.BrounceRock = BrounceRock;
})(objects || (objects = {}));
//# sourceMappingURL=brouncerock.js.map