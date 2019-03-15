module managers {
  export class Game {
    //esta clase la cree para tener todos las variables at the global level y poder hacer referencia desde the scene
    // Globals variables
    public static assetManager: createjs.LoadQueue; //access to all my access
    public static stage: createjs.Stage; //access to my global stage object
    public static currentState: config.Scene; // wich current scene is
    public static scoreBoard: managers.ScoreBoard;
    public static currentScene: number;
    //public static currentSceneObject: objects.Scene;
    public static keyboardManager: managers.Keyboard;
    public static highScore: number = 0;
    public static textureArrow: createjs.SpriteSheet;
    public static sceneObject: objects.Scene;
    public static player: objects.Player;

    public static shootManager: managers.Shoot;

    // player Direction
    public static goingLeft: boolean = true;
    public static goingRigth: boolean = false;
    public static goingUp: boolean = false;
    public static goingDown: boolean = false;
  }
}
