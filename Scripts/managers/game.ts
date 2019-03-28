module managers {
  export class Game {
    // Globals variables
    public static assetManager: createjs.LoadQueue; //access to all my access
    public static stage: createjs.Stage; //access to my global stage object
    public static currentState: config.Scene; // wich current scene is
    public static scoreBoard: managers.ScoreBoard;
    public static currentScene: number;
    public static keyboardManager: managers.Keyboard;
    public static highScore: number = 0;
    public static textureArrow: createjs.SpriteSheet;
    public static sceneObject: objects.Scene;
    public static player: objects.Player;
    public static planelife: objects.LifeBox;

    public static shootManager: managers.Shoot;

    // player Direction
    public static goingLeft: boolean = true;
    public static goingRigth: boolean = false;
    public static goingUp: boolean = false;
    public static goingDown: boolean = false;

    public static xRedEnemy: number;
    public static yRedEnemy: number;

    public static xPlayer: number = 0;
    public static yPlayer: number = 0;
  }
}
