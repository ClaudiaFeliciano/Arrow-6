module scenes {
    export class Play extends objects.Scene {
        // private instance variable
        private _player: objects.Player;
        private _space: objects.Space;
        private _island: objects.Island;

        private _meteorNum: number;
        private _meteor: objects.Meteor[];

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._meteorNum = 3;

            // Instantiates a new Array container of Type objects.meteor
            this._meteor = new Array<objects.Meteor>();

            // Fill the meteor Array with meteors
            for (let count = 0; count < this._meteorNum; count++) {
                this._meteor[count] = new objects.Meteor();
            }

            this.Main();
        }

        //triggered every frame
        public Update(): void {
            this._space.Update();
            this._player.Update();
            this._island.Update();

            //check collision between arrow and island
          //managers.Collision.Check(this._player, this._island);

            // Update Each meteor in the Meteor Array
            for (const meteor of this._meteor) {
                meteor.Update();
                //check collision between arrow and meteor
                //managers.Collision.Check(this._player, this._meteor);

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

            // adds Each meteor in the meteor Array to the Scene
            /*for (const meteor of this._meteor) {
                this.addChild(meteor);*/
            this._meteor.forEach(meteor => {
                this.addChild(meteor);
            });
        }
    }
}
