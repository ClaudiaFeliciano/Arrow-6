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
    var Meteor = /** @class */ (function (_super) {
        __extends(Meteor, _super);
        // public properties
        // constructor
        function Meteor() {
            var _this = _super.call(this, "meteor") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Meteor.prototype._move = function () {
            this.x += this._verticalSpeed; //i want my meteor to move not ony vertical but also horizontal
            this.y += this._horizontalSpeed;
        };
        Meteor.prototype._checkBounds = function () {
            if (this.x > 1024 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Meteor.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 5 + 5); //randomizing my speed as well
            this._horizontalSpeed = Math.floor(Math.random() * 4 - 2);
            this.x = -this.Width; //de donde kiero k comience
            this.y = Math.floor(Math.random() * (1024 - this.Height) + this.HalfHeight);
            this.alpha = 1;
        };
        Meteor.prototype.Start = function () {
            this.Reset();
        };
        Meteor.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Meteor.prototype.Destroy = function () { };
        return Meteor;
    }(objects.AbstractGameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map