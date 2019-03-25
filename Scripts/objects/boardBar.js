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
    var BoardBar = /** @class */ (function (_super) {
        __extends(BoardBar, _super);
        function BoardBar() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("table")) || this;
            _this.Start();
            return _this;
        }
        BoardBar.prototype.Reset = function () {
        };
        BoardBar.prototype.Start = function () {
            this.x = 0;
            this.y = 549;
        };
        BoardBar.prototype.Update = function () {
        };
        BoardBar.prototype.Destroy = function () {
        };
        return BoardBar;
    }(createjs.Bitmap));
    objects.BoardBar = BoardBar;
})(objects || (objects = {}));
//# sourceMappingURL=boardBar.js.map