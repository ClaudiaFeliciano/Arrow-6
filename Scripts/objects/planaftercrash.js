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
    var PlaneAfterCrash = /** @class */ (function (_super) {
        __extends(PlaneAfterCrash, _super);
        function PlaneAfterCrash() {
            return _super.call(this, "afterCollision") || this;
        }
        PlaneAfterCrash.prototype.Reset = function () { };
        PlaneAfterCrash.prototype.Start = function () {
            // this.Move();
        };
        PlaneAfterCrash.prototype.Update = function () { };
        PlaneAfterCrash.prototype.Destroy = function () { };
        return PlaneAfterCrash;
    }(objects.AbstractGameObject));
    objects.PlaneAfterCrash = PlaneAfterCrash;
})(objects || (objects = {}));
//# sourceMappingURL=planaftercrash.js.map