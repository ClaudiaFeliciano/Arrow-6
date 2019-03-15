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
    var Live = /** @class */ (function (_super) {
        __extends(Live, _super);
        // private instance variables
        // constructors
        function Live() {
            var _this = _super.call(this, "live") || this;
            _this.Start();
            return _this;
        }
        // public methods
        Live.prototype.Start = function () {
        };
        Live.prototype.Update = function () {
        };
        Live.prototype.Move = function () {
        };
        Live.prototype.Reset = function () {
        };
        Live.prototype.Destroy = function () {
        };
        return Live;
    }(objects.AbstractGameObject));
    objects.Live = Live;
})(objects || (objects = {}));
//# sourceMappingURL=lives.js.map