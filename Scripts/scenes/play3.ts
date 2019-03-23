module scenes {
  export class Play3 extends objects.Scene {
    // private instance variable
    private _player: objects.Player;
    private _space: objects.Space;
    private _enemy: objects.Enemy;
    private _scoreBoard: managers.ScoreBoard;
    private _engineSound: createjs.AbstractSoundInstance;
    private _playerEngineSound: createjs.AbstractSoundInstance;
    private _shotManager: managers.Shoot;
    private _redenemy: objects.RedEnemy;
    private _sonEnemy: objects.SonEnemy;

    private _meteorNum: number;
    private _meteor: objects.Meteor[];

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // public methods

    public Start(): void {
      this._engineSound = createjs.Sound.play("play3Sound");
      this._engineSound.loop = -1;
      this._engineSound.volume = 0.3;

      this._playerEngineSound = createjs.Sound.play("playerEngine");
      this._playerEngineSound.volume = 1;

      this._meteorNum = 5;
      this._meteor = new Array<objects.Meteor>();
      for (let count = 0; count < this._meteorNum; count++) {
        this._meteor[count] = new objects.Meteor();
      }
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
      this._redenemy.Update();
      this._shotManager.Update();
      this._sonEnemy.Update();

      managers.Collision.Check(this._player, this._enemy);

      for (const meteor of this._meteor) {
        meteor.Update();
        managers.Collision.Check(this._player, meteor);
      }

      // Is not working
      managers.Collision.Check(this._player, this._redenemy);

      managers.Collision.Check(this._player, this._sonEnemy);

      for (let shoot of this._shotManager.Shoots) {
        managers.Collision.Check(this._enemy, shoot);
      }

      if (this._scoreBoard.Lives <= 0) {
        this._engineSound.stop();
        this._playerEngineSound.stop();
        managers.Game.currentState = config.Scene.OVER;
      }

      if (this._scoreBoard.Score >= 300 && this._scoreBoard.Lives >= 0) {
        this._engineSound.stop();
        this._playerEngineSound.stop();
        managers.Game.currentState = config.Scene.WIN;
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

      this._enemy = new objects.Enemy();
      this.addChild(this._enemy);

      this._redenemy = new objects.RedEnemy();
      this.addChild(this._redenemy);

      this._sonEnemy = new objects.SonEnemy();
      this.addChild(this._sonEnemy);

      // adds player to the scene
      this._player = new objects.Player();
      this.addChild(this._player);

      createjs.Tween.get(this._player, { loop: 0 }).to(
        { x: 800, y: 300 },
        1300
      );

      this._shotManager.Shoots.forEach(shoot => {
        this.addChild(shoot);
      });

      this._meteor.forEach(meteor => {
        this.addChild(meteor);
      });

      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);
    }
  }
}