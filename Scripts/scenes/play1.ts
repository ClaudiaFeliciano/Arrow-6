module scenes {
  export class Play1 extends objects.Scene {
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
    private _engineSound: createjs.AbstractSoundInstance; //keeeps track  of my sound as i make it if i want to stops it or to modify the volumen
    private _shotManager: managers.Shoot;

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // public methods

    public Start(): void {
      this._numero = 5;
      this._bigmeteorNum = 3;
      this._space = new objects.Space();
      this._enemy = new objects.Enemy();
      this._player = new objects.Player();
      managers.Game.player = this._player;

      this._bigmeteor = new Array<objects.BigMeteor>();
      for (let count = 0; count < this._bigmeteorNum; count++) {
        this._bigmeteor[count] = new objects.BigMeteor();
      }
      this._smallmeteor = new Array<objects.SmallMeteor>();
      for (let count = 0; count < this._numero; count++) {
        this._smallmeteor[count] = new objects.SmallMeteor();
      }
    
      this._meteor = new Array<objects.Meteor>();
      for (let count = 0; count < this._numero; count++) {
        this._meteor[count] = new objects.Meteor();
      }

      this._engineSound = createjs.Sound.play("gameSound"); 
      this._engineSound.loop = -1; 
      this._engineSound.volume = 0.1;

      //create the score board UI for the scene
      this._scoreBoard = new managers.ScoreBoard();
      managers.Game.scoreBoard = this._scoreBoard;

      this._shotManager = new managers.Shoot();
      managers.Game.shootManager = this._shotManager;
      this.Main();
    }

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
        managers.Collision.Check(this._player, meteor); //check collision between the arrow and the meteor
      }
      this._shotManager.Update();
      this._shotManager.Shoots.forEach(bullet => {
        // managers.Collision.Check(this._player, bullet);
        managers.Collision.Check(bullet, this._enemy);
        
      });


      //if lives fall below zero switch scenes to the game over scene
      if (this._scoreBoard.Lives <= 0) {
        this._engineSound.stop(); //sino me sigue sonando the app
        managers.Game.currentState = config.Scene.OVER;
      }

      if ((this._scoreBoard.Score >= 500) && (this._scoreBoard.Lives >= 0)) {
        this._engineSound.stop();
        managers.Game.currentState = config.Scene.START2;
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
      /*if (this._scoreBoard.Score >= 300 && this._scoreBoard.Lives >= 0) {
        this._engineSound.stop();
        managers.Game.currentState = config.Scene.START2;*/
      
    
        public Destroy(): void {
          this.removeAllChildren();
        }
    
        public Reset(): void { }
    
        public Main(): void {
          this.addChild(this._space);
          this.addChild(this._enemy);
          this.addChild(this._player);
    
          createjs.Tween.get(this._player, { loop: 0 }).to(
            { x: 800, y: 300 },
            1000
          );
          this.addChild(this._player.planeflash);    
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
    
          //add scoreboard labels to the scene
          this.addChild(this._scoreBoard.LivesLabel);
          this.addChild(this._scoreBoard.ScoreLabel);
        }
      }
    }