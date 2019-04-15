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
var math;
(function (math) {
    var Vec2 = /** @class */ (function (_super) {
        __extends(Vec2, _super);
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        /**
         * This method returns the Euclidean Distance between vec1 and vec2
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {number}
         */
        Vec2.Distance = function (vec1, vec2) {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        };
        /**
         * This method returns the resultant vector when adding vec1 and vec2
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {math.Vec2}
         */
        Vec2.Add = function (vec1, vec2) {
            var result = new math.Vec2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        };
        /**
         * This method subtracts vec2 from vec1 and returns a Vec2 result
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {math.Vec2}
         */
        Vec2.Subtract = function (vec1, vec2) {
            var result = new math.Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        };
        /**
         * This method multiplies a Vec2 object by a scalar and returns the result
         * as a new Vec2 object
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {number} scalar
         * @returns {math.Vec2}
         */
        Vec2.Mulitply = function (vec1, scalar) {
            return new math.Vec2(vec1.x * scalar, vec1.y * scalar);
        };
        /**
         * This method Divides a Vec2 object by a scalar and returns the result
         * as a new Vec2 object
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {number} scalar
         * @returns {math.Vec2}
         * @memberof Vec2
         */
        Vec2.Divide = function (vec1, scalar) {
            return new math.Vec2(vec1.x / scalar, vec1.y / scalar);
        };
        // Convenience Methods
        Vec2.up = function () {
            return new math.Vec2(0, -1);
        };
        Vec2.down = function () {
            return new math.Vec2(0, 1);
        };
        Vec2.right = function () {
            return new math.Vec2(1, 0);
        };
        Vec2.left = function () {
            return new math.Vec2(-1, 0);
        };
        Vec2.zero = function () {
            return new math.Vec2(0, 0);
        };
        return Vec2;
    }(createjs.Point));
    math.Vec2 = Vec2;
})(math || (math = {}));
//# sourceMappingURL=vec2.js.map