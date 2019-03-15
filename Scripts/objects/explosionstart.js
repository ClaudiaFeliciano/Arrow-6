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
    var ExplosionStart = /** @class */ (function (_super) {
        __extends(ExplosionStart, _super);
        // private instance variables
        // public properties
        // constructor
        function ExplosionStart() {
            var _this = _super.call(this, "boom") || this;
            _this.Start();
            return _this;
        }
        ExplosionStart.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (1024 - this.Width)) + this.HalfWidth);
            this.y = Math.floor((Math.random() * (1024 - this.Height)) + this.HalfHeight);
        };
        ExplosionStart.prototype.Start = function () {
        };
        ExplosionStart.prototype.Update = function () {
            this.Reset();
        };
        ExplosionStart.prototype.Destroy = function () {
        };
        return ExplosionStart;
    }(objects.AbstractGameObject));
    objects.ExplosionStart = ExplosionStart;
})(objects || (objects = {}));
//# sourceMappingURL=explosionstart.js.map