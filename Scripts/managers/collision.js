var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        //this laass is gonna be a container
        Collision.Check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.HalfWidth + object2.HalfWidth) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    console.log("Collision detected!!!");
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        case "meteor":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map