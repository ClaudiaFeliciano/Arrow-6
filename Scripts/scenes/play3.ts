module scenes {
  export class Play3 extends objects.Scene {
    // private instance variable
    private _player: objects.Player;
    private _space: objects.Space;
    private _scoreBoard: managers.ScoreBoard;
    private _engineSound: createjs.AbstractSoundInstance;
    private _playerEngineSound: createjs.AbstractSoundInstance;
    private _shotManager: managers.Shoot;
    private _redenemy: objects.RedEnemy;
    private _sonEnemy: objects.SonEnemy;
    public board: objects.BoardBar;

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
      this.board = new objects.BoardBar();
      this._player = new objects.Player();
      managers.Game.player = this._player;

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

    //Triggered every frame
    public Update(): void {
      this._space.Update();
      this._player.Update();
      this.board.Update();

      this._shotManager.Update();
      this._shotManager.Shoots.forEach(bullet => {
        managers.Collision.Check(bullet, this._sonEnemy);
      });

      this._redenemy.Update();
      managers.Collision.Check(this._player, this._redenemy);

      this._sonEnemy.Update();
      managers.Collision.Check(this._player, this._sonEnemy);

      for (const meteor of this._meteor) {
        meteor.Update();
        managers.Collision.Check(this._player, meteor);
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

      this.addChild(this._player);

      this.addChild(this._player.planeflash);

      this._redenemy = new objects.RedEnemy();
      this.addChild(this._redenemy);

      createjs.Tween.get(this._redenemy, { loop: 0 })
        .wait(1500)
        .to({ x: 500, y: 200 }, 2500)
        .to({ x: -this._redenemy.HalfWidth, y: 200 }, 2000)
        .wait(1000);

      this._sonEnemy = new objects.SonEnemy();
      this.addChild(this._sonEnemy);

      createjs.Tween.get(this._sonEnemy, { loop: 0 })
        .wait(7100)
        // .wait(100)
        .to({ x: 300, y: 270 }, 1000);

      createjs.Tween.get(this._player, { loop: 0 })
        .wait(6000)
        // .wait(100)
        .to({ x: 800, y: 300 }, 1500);

      this._meteor.forEach(meteor => {
        this.addChild(meteor);
        createjs.Tween.get(meteor, { loop: 0 })
          .wait(10000)
          .to({
            x: -meteor.Width,
            y: Math.random() * (1024 - meteor.Height) + meteor.HalfHeight
          });
      });

      this._shotManager.Shoots.forEach(shoot => {
        this.addChild(shoot);
      });
      this.addChild(this.board);
      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);
    }
  }
}
