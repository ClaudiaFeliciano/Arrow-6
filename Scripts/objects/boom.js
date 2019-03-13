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
    var Boom = /** @class */ (function (_super) {
        __extends(Boom, _super);
        // constructor
        function Boom() {
            var _this = _super.call(this, "boom") || this;
            _this.Start();
            return _this;
        }
        Boom.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false); //remove my event listener
            managers.Game.sceneObject.removeChild(this); //para k no se me kede enganachado en mermoria
        };
        // public methods
        Boom.prototype.Reset = function () {
        };
        Boom.prototype.Start = function () {
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        Boom.prototype.Update = function () {
        };
        Boom.prototype.Destroy = function () {
        };
        return Boom;
    }(objects.AbstractGameObject));
    objects.Boom = Boom;
})(objects || (objects = {}));
//# sourceMappingURL=boom.js.map