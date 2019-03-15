module objects {
    export class ExplosionStart extends objects.AbstractGameObject {
        // private instance variables
       

        // public properties

        // constructor
        constructor() {
            super("boom");
            this.Start();
        }

        

        public Reset(): void {   
            this.x = Math.floor((Math.random() * (1024 - this.Width)) + this.HalfWidth)
            this.y = Math.floor((Math.random() * (1024 - this.Height)) + this.HalfHeight);
            
        }        
        
        public Start(): void {
         
        }

        public Update(): void {
         
           this.Reset();
        }

        public Destroy(): void {
        }
    }
}
