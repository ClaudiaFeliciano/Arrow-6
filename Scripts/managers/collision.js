var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.HalfHeight + object2.HalfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "meteor":
                            if (object2.alpha != 0) {
                                createjs.Sound.play("meteorSound");
                                managers.Game.scoreBoard.Score += 100;
                                if (managers.Game.scoreBoard.Score % 1000 == 0) {
                                    managers.Game.scoreBoard.Lives += 1;
                                    createjs.Sound.play("extralive");
                                }
                                if (managers.Game.highScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore =
                                        managers.Game.scoreBoard.Score;
                                    managers.Game.highScore = managers.Game.scoreBoard.HighScore;
                                    object2.alpha = 0;
                                }
                            }
                            break;
                        case "sonenemy":
                            createjs.Sound.play("laser");
                            if (object1.alpha != 0) {
                                managers.Game.scoreBoard.Lives -= 1;
                                var boomLaser = new objects.Boom();
                                boomLaser.x = object2.x - object2.Width;
                                boomLaser.y = object2.y - object2.Height;
                                managers.Game.sceneObject.addChild(boomLaser);
                                object2.Reset();
                            }
                            break;
                        case "asteroid":
                            if (object1.alpha != 0) {
                                createjs.Sound.play("explosion");
                                managers.Game.scoreBoard.Lives -= 2;
                                var boomAsteroid = new objects.Boom();
                                boomAsteroid.x = object2.x;
                                boomAsteroid.y = object2.y;
                                managers.Game.sceneObject.addChild(boomAsteroid);
                                //object2.Reset();
                            }
                            break;
                        case "enemy":
                            createjs.Sound.play("explosion");
                            managers.Game.scoreBoard.Lives -= 1;
                            var boomEnemy = new objects.Boom();
                            boomEnemy.x = object2.x - object2.Width;
                            boomEnemy.y = object2.y - object2.Height;
                            managers.Game.sceneObject.addChild(boomEnemy);
                            object2.Reset();
                            break;
                        case "redEnemy":
                            createjs.Sound.play("explosion");
                            managers.Game.scoreBoard.Lives -= 1;
                            var boomRed = new objects.Boom();
                            boomRed.x = object2.x - object2.Width;
                            boomRed.y = object2.y - object2.Height;
                            managers.Game.sceneObject.addChild(boomRed);
                            object2.Reset();
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