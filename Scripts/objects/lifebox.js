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
    var LifeBox = /** @class */ (function (_super) {
        __extends(LifeBox, _super);
        function LifeBox() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        LifeBox.prototype.Reset = function () { };
        LifeBox.prototype.Start = function () {
            this.y = 560;
            this.x = 850;
            this.Width = 40;
            this.Height = 40;
            this.rotation = 45;
            this.planeflash = new objects.PlaneAfterCrash();
        };
        LifeBox.prototype.Update = function () { };
        LifeBox.prototype.Destroy = function () { };
        return LifeBox;
    }(objects.AbstractGameObject));
    objects.LifeBox = LifeBox;
})(objects || (objects = {}));
//# sourceMappingURL=lifebox.js.map