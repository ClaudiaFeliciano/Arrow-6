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
    var BoardInformation = /** @class */ (function (_super) {
        __extends(BoardInformation, _super);
        function BoardInformation() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("menuBar")) || this;
            _this.Start();
            return _this;
        }
        BoardInformation.prototype.Reset = function () {
        };
        BoardInformation.prototype.Start = function () {
            this.x = 140;
            this.y = 100;
        };
        BoardInformation.prototype.Update = function () {
        };
        BoardInformation.prototype.Destroy = function () {
        };
        return BoardInformation;
    }(createjs.Bitmap));
    objects.BoardInformation = BoardInformation;
})(objects || (objects = {}));
//# sourceMappingURL=boardinformation.js.map