//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager; //hold everything that i want to load ( load the array of the manifest)
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureArrowData;
    var textureArrow;
    textureArrowData = {
        "images": ["./Assets/sprites/textureArrowData.png"],
        "frames": [
            [2, 2, 425, 40, 0, 0, 0],
            [429, 2, 80, 85, 0, 0, 0],
            [2, 89, 80, 84, 0, 0, 0],
            [84, 89, 205, 61, 0, 0, 0],
            [2, 175, 244, 31, 0, 0, 0],
            [248, 175, 53, 53, 0, 0, 0],
            [303, 175, 53, 53, 0, 0, 0],
            [358, 175, 57, 57, 0, 0, 0],
            [417, 175, 56, 57, 0, 0, 0],
            [2, 234, 51, 57, 0, 0, 0],
            [55, 234, 43, 56, 0, 0, 0],
            [100, 234, 26, 56, 0, 0, 0],
            [128, 234, 11, 57, 0, 0, 0],
            [141, 234, 26, 56, 0, 0, 0],
            [169, 234, 43, 56, 0, 0, 0],
            [214, 234, 51, 57, 0, 0, 0],
            [267, 234, 56, 57, 0, 0, 0],
            [325, 234, 53, 53, 0, 0, 0],
            [380, 234, 53, 53, 0, 0, 0],
            [435, 234, 67, 71, 0, 0, 0],
            [2, 307, 53, 53, 0, 0, 0],
            [57, 307, 53, 53, 0, 0, 0],
            [112, 307, 70, 113, 0, 0, 0],
            [184, 307, 70, 113, 0, 0, 0],
            [256, 307, 53, 53, 0, 0, 0],
            [311, 307, 53, 53, 0, 0, 0],
            [366, 307, 53, 53, 0, 0, 0],
            [421, 307, 53, 53, 0, 0, 0],
            [2, 422, 205, 61, 0, 0, 0]
        ],
        "animations": {
            "ArrowGame": { "frames": [0] },
            "enemy": { "frames": [1, 2] },
            "exit": { "frames": [3] },
            "gameOver": { "frames": [4] },
            "info": { "frames": [5] },
            "infoActive": { "frames": [6] },
            "Live": { "frames": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
            "menu": { "frames": [17] },
            "menuActive": { "frames": [18] },
            "meteor": { "frames": [19] },
            "music": { "frames": [20] },
            "musicActive": { "frames": [21] },
            "player": { "frames": [22, 23] },
            "replay": { "frames": [24] },
            "replayActive": { "frames": [25] },
            "Settings": { "frames": [26] },
            "settingsActive": { "frames": [27] },
            "start": { "frames": [28] }
        }
    };
    var assetManifest = [
        { id: "space", src: "/Assets/images/space.png" },
        { id: "gamearrow", src: "/Assets/images/ArrowGame.png" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "bulletSound", src: "/Assets/audio/bullet.mp3" },
        { id: "yaySound", src: "/Assets/audio/yay.ogg" }
    ]; // Basycally an array struct. Placeholder
    function Init() {
        console.log("%c Game Started...", "font-size: 20px;");
        textureArrow = new createjs.SpriteSheet(textureArrowData);
        assetManager = new createjs.LoadQueue(); //create the asset manager
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); //asset manager can load sound- enable sound preloading
        assetManager.loadManifest(assetManifest); //Loads the manifest defined above -preloads all assets listed in the manifest
        assetManager.on("complete", Start, this); // call Start when assets are finished loading
    }
    function Start() {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.Game.currentState = currentState; //it makes a refrence to my stage and I hold it in my global object
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureArrow = textureArrow;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        // if the scene that is playing returns anthr scene
        //then call Main again and switch the scene
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update(); //redraws the state
    }
    function Main() {
        //remove all current objects from the stage
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                //instattiate a new scene object
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                //instattiate a new scene object
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                //instattiate a new scene object
                currentScene = new scenes.Over();
                break;
        }
        //add the new scene object to stage
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map