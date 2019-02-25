module managers {
    export class Game { //esta clase la cree para tener todos las variables at the global level y poder hacer referencia desde the scene
        // Globals variables
        public static assetManager:createjs.LoadQueue; ;//access to all my access
        public static stage:createjs.Stage; //access to my global stage object
        public static currentState:config.Scene; ;// wich current scene is
        public static scoreBoard: managers.ScoreBoard;
    }
}