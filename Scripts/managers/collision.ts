module managers {
    export class Collision{

        public static Check(object1: objects.AbstractGameObject, object2: objects.AbstractGameObject){
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object1.x, object1.y);

            if(math.Vec2.Distance(P1, P2) < (object1.HalfHeight + object2.HalfHeight)){
                console.log("Colission");
               
                
            }

        }
    }
}