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
    var AbstractGameObject = /** @class */ (function (_super) {
        __extends(AbstractGameObject, _super);
        // constructors
        function AbstractGameObject(imageString) {
            var _this = _super.call(this, managers.Game.textureArrow, imageString) || this;
            _this.name = imageString; //name come from the superclass Bitmap
            _this.Position = new math.Vec2(_this.x, _this.y);
            _this._initialize();
            return _this;
        }
        Object.defineProperty(AbstractGameObject.prototype, "Width", {
            // public properties
            get: function () {
                return this._width;
            },
            set: function (newValue) {
                this._width = newValue;
                this.HalfWidth = this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractGameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newValue) {
                this._height = newValue;
                this.HalfHeight = this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractGameObject.prototype, "HalfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newValue) {
                this._halfHeight = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractGameObject.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newValue) {
                this._halfWidth = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractGameObject.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        AbstractGameObject.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.isColliding = false;
        };
        AbstractGameObject.prototype._updatePosition = function () {
            this.Position.x = this.x;
            this.Position.y = this.y;
        };
        return AbstractGameObject;
    }(createjs.Sprite));
    objects.AbstractGameObject = AbstractGameObject;
})(objects || (objects = {}));
//# sourceMappingURL=abstractgameobject.js.map