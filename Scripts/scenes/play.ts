module scenes {
    export class Play extends objects.Scene {
        // private instance variable
         private _player:objects.Player;
         private _space:objects.Space;
         private _island:objects.Island;

         private _cloudNum: number;
         private _clouds:objects.Cloud[];

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._cloudNum = 3;

            // Instantiates a new Array container of Type objects.Cloud
            this._clouds = new Array<objects.Cloud>();

            // Fill the Cloud Array with Clouds
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(); 
            }

            this.Main();
        }        
        
        public Update(): void {
            this._space.Update();
            this._player.Update();
            this._island.Update();

            // Update Each cloud in the Cloud Array
            for (const cloud of this._clouds) {
                cloud.Update();
            }

        }
        
        public Destroy(): void {
            this.removeAllChildren();
        }
        
        public Reset(): void {

        }
        
        public Main(): void {
        // adds space to the scene
        this._space = new objects.Space();
        this.addChild(this._space);

        // adds island to the scene
        this._island = new objects.Island();
        this.addChild(this._island);

        // adds player to the scene
        this._player = new objects.Player();
        this.addChild(this._player);

        // adds Each Cloud in the Cloud Array to the Scene
        for (const cloud of this._clouds) {
            this.addChild(cloud);
        }
    }
}
}