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
            var _this = _super.call(this, managers.Game.assetManager.getResult("airplanelife")) || this;
            _this.Start();
            return _this;
        }
        LifeBox.prototype.Reset = function () { };
        LifeBox.prototype.Start = function () {
            this.y = 20;
            this.x = 20;
            /* this.wWidth = 40;
             this.Height = 40;*/
        };
        LifeBox.prototype.Update = function () { };
        LifeBox.prototype.Destroy = function () { };
        return LifeBox;
    }(createjs.Bitmap));
    objects.LifeBox = LifeBox;
})(objects || (objects = {}));
//# sourceMappingURL=lifebox.js.map