module objects {
    export class LifeBox extends objects.AbstractGameObject {
        public planeflash: objects.PlaneAfterCrash;

        constructor() {
            super("player");
            this.Start();
        }



        public Reset(): void { }

        public Start(): void {
            this.y = 560;
            this.x = 850;
            this.Width = 40;
            this.Height = 40;
            this.rotation = 45;
            this.planeflash = new objects.PlaneAfterCrash();
        }

        public Update(): void {}

        public Destroy(): void {}
    }
}
