module managers {
    export class Collision { //this laass is gonna be a container

        public static Check(object1: objects.AbstractGameObject, object2: objects.AbstractGameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);
            console.log("it is in");

            if (math.Vec2.Distance(P1, P2) < (object1.HalfWidth + object2.HalfWidth)) {
               console.log("xgbhxfg");
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Score +=100;
                            break;
                        case "meteor":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Lives -=1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
               console.log("else xgbhxfg");

            }

        }
    }
}
