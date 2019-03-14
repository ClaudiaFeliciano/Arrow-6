module scenes {
  export class Play extends objects.Scene {
    // private instance variable
    private _player: objects.Player;
    private _space: objects.Space;
    private _enemy: objects.Enemy;
    private _meteorNum: number;
    private _meteor: objects.Meteor[];
    private _scoreBoard: managers.ScoreBoard;
    private _engineSound: createjs.AbstractSoundInstance; //keeeps track  of my sound as i make it if i want to stops it or to modify the volumen
    private _shotManager: managers.Shoot;

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // public methods

    public Start(): void {
      this._meteorNum = 3;

      // Instantiates a new Array container of Type objects.meteor
      this._meteor = new Array<objects.Meteor>();

      // Fill the meteor Array with meteors
      for (let count = 0; count < this._meteorNum; count++) {
        this._meteor[count] = new objects.Meteor();
      }
      this._engineSound = createjs.Sound.play("gameSound"); //lo pongo akip ara que comience en cuanto comience la scence
      this._engineSound.loop = -1; //play forever
      this._engineSound.volume = 0.1;

      //create the score board UI for the scene
      this._scoreBoard = new managers.ScoreBoard();
      managers.Game.scoreBoard = this._scoreBoard;

      this._shotManager = new managers.Shoot();
      managers.Game.shootManager = this._shotManager;
      this.Main();
    }

    //triggered every frame
    public Update(): void {
      this._space.Update();
      this._player.Update();
      this._enemy.Update();
      this._shotManager.Update();

      //check collision between arrow and island
      managers.Collision.Check(this._player, this._enemy);

      // Update Each meteor in the Meteor Array
      for (const meteor of this._meteor) {
        meteor.Update();
        //check collision between arrow and meteor
        managers.Collision.Check(this._player, meteor); //check collision between the arrow and the meteor
      }

      for (const shoot of this._shotManager.Shoots) {
        //  shoot.Update();
        managers.Collision.Check(this._enemy, shoot);
        //console.log("estoy aki");
      }

      //if lives fall below zero switch scenes to the game over scene
      if (this._scoreBoard.Lives <= 0) {
        this._engineSound.stop(); //sino me sigue sonando the app
        managers.Game.currentState = config.Scene.OVER;
      }
      // right
      if (this._player._rigtGravity) {
        this._player.rotation = 180;
      }
      // left
      if (this._player._leftGravity) {
        this._player.rotation = 0;
      }
      // down
      if (this._player._downGravity) {
        this._player.rotation = 270;
      }
      // Up
      if (this._player._upGravity) {
        this._player.rotation = 90;
      }
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      // adds space to the scene
      this._space = new objects.Space();
      this.addChild(this._space);

      // adds enemy to the scene
      this._enemy = new objects.Enemy();
      this.addChild(this._enemy);

      // adds player to the scene
      this._player = new objects.Player();
      this.addChild(this._player);

      createjs.Tween.get(this._player, { loop: 0 }).to(
        { x: 800, y: 300 },
        1000
      );

      this._shotManager.Shoots.forEach(shoot => {
        this.addChild(shoot);
      });

      // adds Each meteor in the meteor Array to the Scene
      /*for (const meteor of this._meteor) {
                this.addChild(meteor);*/
      this._meteor.forEach(meteor => {
        this.addChild(meteor);
      });

      //add scoreboard labels to the scene
      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);
    }
  }
}
