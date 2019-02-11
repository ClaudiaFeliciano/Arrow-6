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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // public properties
        // constructor
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Island.prototype._move = function () {
            this.x += this._horizontalSpeed;
        };
        Island.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Island.prototype.Reset = function () {
            this._horizontalSpeed = 5;
            this.x = -this.Width; //esto me da desde donde el objeto saldra
            this.y = Math.floor((Math.random() * (1024 - this.Height)) + this.HalfHeight);
        };
        Island.prototype.Start = function () {
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Island.prototype.Destroy = function () {
        };
        return Island;
    }(objects.AbstractGameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map