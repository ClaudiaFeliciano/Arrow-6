module managers {
    export class Collision {
        public static Check(object1: objects.AbstractGameObject, object2: objects.AbstractGameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.HalfHeight + object2.HalfHeight)) {
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
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                    managers.Game.highScore = managers.Game.scoreBoard.HighScore;
                                    object2.alpha = 0;
                                }
                            }
                            break;

                        case "asteroid":
                            if (object1.alpha != 0) {

                                createjs.Sound.play("explosion");
                                managers.Game.scoreBoard.Lives -= 2;

                                let boom1 = new objects.Boom();
                                boom1.x = object2.x;
                                boom1.y = object2.y;
                                managers.Game.sceneObject.addChild(boom1);
                                //object2.Reset();
                            }
                            break;

                        case "enemy":
                            createjs.Sound.play("explosion");
                            managers.Game.scoreBoard.Lives -= 1;

                            let boom = new objects.Boom();
                            boom.x = object2.x - object2.Width;
                            boom.y = object2.y - object2.Height;
                            managers.Game.sceneObject.addChild(boom);
                            object2.Reset();
                            break;
                    }

                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}