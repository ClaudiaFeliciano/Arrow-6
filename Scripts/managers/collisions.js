var managers;
(function (managers) {
    var Collisions = /** @class */ (function () {
        function Collisions() {
        }
        Collisions.Check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.HalfHeight + object2.HalfHeight)) {
                if (!object2.isColliding) {
                    console.log("Collisions with " + object2.name);
                    object2.isColliding = true;
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collisions;
    }());
    managers.Collisions = Collisions;
})(managers || (managers = {}));
//# sourceMappingURL=collisions.js.map