module objects {
    export class Boom extends objects.AbstractGameObject {
       
        

        // constructor
        constructor() {
            super("boom");
            this.Start();
        }
        private _animationEnded() {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);//remove my event listener
            managers.Game.sceneObject.removeChild(this);//para k no se me kede enganachado en mermoria
        }
         // public methods
         public  Reset(): void{

         }

         public  Start(): void{
            this.on("animationend", this._animationEnded.bind(this), false);

         }
 
         public  Update(): void
         {

         }
 
         public  Destroy(): void
         {

         }
    }
}

