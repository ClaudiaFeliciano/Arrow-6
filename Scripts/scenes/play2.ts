module scenes {
  export class Play2 extends objects.Scene {
    // private instance variable
    private _player: objects.Player;
    private _space: objects.Space;
    private _enemy: objects.Enemy;
    private _numero: number;
    private _bigmeteorNum: number;
    private _meteor: objects.Meteor[];
    private _smallmeteor: objects.SmallMeteor[];
    private _bigmeteor: objects.BigMeteor[];
    private _scoreBoard: managers.ScoreBoard;
    private _engineSound: createjs.AbstractSoundInstance;
    private _shotManager: managers.Shoot;

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // public methods

    public Start(): void {
      this._bigmeteorNum = 3;
      this._bigmeteor = new Array<objects.BigMeteor>();
      for (let count = 0; count < this._bigmeteorNum; count++) {
        this._bigmeteor[count] = new objects.BigMeteor();
      }

      this._numero = 5;
      this._smallmeteor = new Array<objects.SmallMeteor>();
      for (let count = 0; count < this._numero; count++) {
        this._smallmeteor[count] = new objects.SmallMeteor();
      }

      // Instantiates a new Array container of Type objects.meteor
      this._meteor = new Array<objects.Meteor>();
      // Fill the meteor Array with meteors
      for (let count = 0; count < this._numero; count++) {
        this._meteor[count] = new objects.Meteor();
      }

      this._engineSound = createjs.Sound.play("gameSound");
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

      managers.Collision.Check(this._player, this._enemy);

      for (const bigmeteor of this._bigmeteor) {
        bigmeteor.Update();
        managers.Collision.Check(this._player, bigmeteor);
      }

      for (const smallmeteor of this._smallmeteor) {
        smallmeteor.Update();
        //managers.Collision.Check(this._player, smallmeteor);
      }
      // Update Each meteor in the Meteor Array
      for (const meteor of this._meteor) {
        meteor.Update();
        //check collision between arrow and meteor
        managers.Collision.Check(this._player, meteor);
      }

      for (const shoot of this._shotManager.Shoots) {
        //  shoot.Update();
        managers.Collision.Check(this._enemy, shoot);
      }

      if (this._scoreBoard.Lives <= 0) {
        this._engineSound.stop();
        managers.Game.currentState = config.Scene.OVER;
      }

      if (this._scoreBoard.Score >= 300 && this._scoreBoard.Lives >= 0) {
        this._engineSound.stop();
        managers.Game.currentState = config.Scene.START3;
      }
      // right
      if (managers.Game.goingRigth) {
        this._player.rotation = 180;
      }
      // left
      if (managers.Game.goingLeft) {
        this._player.rotation = 0;
      }
      // down
      if (managers.Game.goingDown) {
        this._player.rotation = 270;
      }
      // Up
      if (managers.Game.goingUp) {
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

      for (const bigmeteor of this._bigmeteor) {
        this.addChild(bigmeteor);
      }
      for (const smallmeteor of this._smallmeteor) {
        this.addChild(smallmeteor);
      }
      this._meteor.forEach(meteor => {
        this.addChild(meteor);
      });

      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);
    }
  }
}
