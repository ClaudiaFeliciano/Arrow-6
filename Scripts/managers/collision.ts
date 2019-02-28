module managers{
    export class Collision{
        public static Check(object1: objects.AbstractGameObject, object2: objects.AbstractGameObject){
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.HalfHeight + object2.HalfHeight)){
                if(!object2.isColliding){
                    object2.isColliding= true;

                    switch(object2.name){
                        case "meteor":
                        createjs.Sound.play("yaySound");
                        managers.Game.scoreBoard.Score +=100;
                        if(managers.Game.highScore <= managers.Game.scoreBoard.Score){
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                            managers.Game.highScore = managers.Game.scoreBoard.HighScore;

                        }
                        break;

                        case "enemy":
                        createjs.Sound.play("yaySound");
                        managers.Game.scoreBoard.Lives -=1;
                        break;
                    }
                    
                } 
            }
            else{
                object2.isColliding= false;
            }
        }
    }
}