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
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        // public properties
        // constructor
        function Boss() {
            var _this = 
            // Change the image here ****CLAUDIA****
            // super("boss");
            _super.call(this, "enemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Boss.prototype._move = function () {
            this.x += this._horizontalSpeed;
        };
        Boss.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Boss.prototype.Reset = function () {
            this._horizontalSpeed = 4;
            this.x = -this.Width;
            this.y = Math.floor(Math.random() * (500 - this.Height)); // 500 bs there will be a panel at the botton
        };
        Boss.prototype.Start = function () {
            this.Reset();
        };
        Boss.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Boss.prototype.Destroy = function () { };
        return Boss;
    }(objects.AbstractGameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=bossEnemy.js.map