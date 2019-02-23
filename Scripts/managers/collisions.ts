module managers {
    export class Collisions {

        public static Check(object1: objects.AbstractGameObject, object2: objects.AbstractGameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.HalfHeight + object2.HalfHeight)) {
                if (!object2.isColliding) {
                    createjs.Sound.play("yay");
                   
                    console.log(object2.name);
                    
                    /*switch(object2.name){
                        case "island":
                        createjs.Sound.play("explosion");
                        break;

                        case "null":
                        createjs.Sound.play("bullet");
                        console.log("estoy aki");
                        break;
                    }*/
                    object2.isColliding = true;
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}