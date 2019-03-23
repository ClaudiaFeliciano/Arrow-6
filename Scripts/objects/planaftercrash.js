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
            this.Move();
        };
        PlaneAfterCrash.prototype.Move = function () {
            if ((managers.Game.keyboardManager.moveForward) && (this.alpha == 1)) {
                this.y -= 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = true;
                managers.Game.goingDown = false;
            }
            if ((managers.Game.keyboardManager.moveBackward) && (this.alpha == 1)) {
                this.y += 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = false;
                managers.Game.goingDown = true;
            }
            if ((managers.Game.keyboardManager.moveLeft) && (this.alpha == 1)) {
                this.x -= 4;
                managers.Game.goingLeft = true;
                managers.Game.goingRigth = false;
                managers.Game.goingUp = false;
                managers.Game.goingDown = false;
            }
            if ((managers.Game.keyboardManager.moveRight) && (this.alpha == 1)) {
                this.x += 4;
                managers.Game.goingLeft = false;
                managers.Game.goingRigth = true;
                managers.Game.goingUp = false;
                managers.Game.goingDown = false;
            }
            this.Gravity();
        };
        PlaneAfterCrash.prototype.Gravity = function () {
            if (managers.Game.goingLeft) {
                this.x -= 2;
            }
            if (managers.Game.goingRigth) {
                this.x += 2;
            }
            if (managers.Game.goingUp) {
                this.y -= 2;
            }
            if (managers.Game.goingDown) {
                this.y += 2;
            }
        };
        PlaneAfterCrash.prototype.Update = function () { };
        PlaneAfterCrash.prototype.Destroy = function () { };
        return PlaneAfterCrash;
    }(objects.AbstractGameObject));
    objects.PlaneAfterCrash = PlaneAfterCrash;
})(objects || (objects = {}));
//# sourceMappingURL=planaftercrash.js.map