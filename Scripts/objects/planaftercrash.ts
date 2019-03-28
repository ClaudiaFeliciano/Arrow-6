module objects{
    export class PlaneAfterCrash extends objects.AbstractGameObject{
        constructor(){
            super("afterCollision")
        }

    
    public Reset(): void{}
    public Start(): void{
       // this.Move();
    }
   // public Move(): void{
      /*  if ((managers.Game.keyboardManager.moveForward) && (this.alpha==1)) {
            this.y -= 4;
            
            managers.Game.goingLeft = false;
            managers.Game.goingRigth = false;
            managers.Game.goingUp = true;
            managers.Game.goingDown = false;
          }
          if ((managers.Game.keyboardManager.moveBackward)&& (this.alpha==1)) {
            this.y += 4;
           
            managers.Game.goingLeft = false;
            managers.Game.goingRigth = false;
            managers.Game.goingUp = false;
            managers.Game.goingDown = true;
          }
          if ((managers.Game.keyboardManager.moveLeft)&& (this.alpha==1)) {
            this.x -= 4;
           
            managers.Game.goingLeft = true;
            managers.Game.goingRigth = false;
            managers.Game.goingUp = false;
            managers.Game.goingDown = false;
          }
          if ((managers.Game.keyboardManager.moveRight)&& (this.alpha==1)) {
            this.x += 4;
            
            managers.Game.goingLeft = false;
            managers.Game.goingRigth = true;
            managers.Game.goingUp = false;
            managers.Game.goingDown = false;
          }
          this.Gravity();   
    }
    public Gravity(): void {
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
      }*/
  
    public Update(): void{}
    public Destroy(): void{}
    }
}