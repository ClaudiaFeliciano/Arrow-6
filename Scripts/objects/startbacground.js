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
    var StartBackground = /** @class */ (function (_super) {
        __extends(StartBackground, _super);
        function StartBackground() {
            return _super.call(this, managers.Game.assetManager.getResult("spaceX")) || this;
            // this.Start();
        }
        StartBackground.prototype.Reset = function () {
        };
        StartBackground.prototype.Start = function () {
            this.Reset();
        };
        StartBackground.prototype.Update = function () {
        };
        StartBackground.prototype.Destroy = function () {
        };
        return StartBackground;
    }(createjs.Bitmap));
    objects.StartBackground = StartBackground;
})(objects || (objects = {}));
//# sourceMappingURL=startbacground.js.map