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
            [2, 2, 70, 113, 0, 0, 0],
            [74, 2, 70, 113, 0, 0, 0],
            [146, 2, 70, 113, 0, 0, 0],
            [218, 2, 70, 113, 0, 0, 0],
            [290, 2, 3, 3, 0, 0, 0, 0],
            [295, 2, 425, 40, 0, 0, 0],
            [722, 2, 250, 203, 0, 0, 0],
            [2, 207, 250, 202, 0, 0, 0],
            [254, 207, 250, 203, 0, 0, 0],
            [506, 207, 250, 201, 0, 0, 0],
            [758, 207, 248, 202, 0, 0, 0],
            [2, 412, 248, 201, 0, 0, 0],
            [252, 412, 250, 197, 0, 0, 0],
            [504, 412, 250, 202, 0, 0, 0],
            [756, 412, 250, 201, 0, 0, 0],
            [2, 616, 250, 200, 0, 0, 0],
            [254, 616, 242, 199, 0, 0, 0],
            [498, 616, 80, 85, 0, 0, 0],
            [580, 616, 80, 84, 0, 0, 0],
            [662, 616, 205, 61, 0, 0, 0],
            [2, 818, 244, 31, 0, 0, 0],
            [248, 818, 53, 53, 0, 0, 0],
            [303, 818, 53, 53, 0, 0, 0],
            [358, 818, 57, 57, 0, 0, 0],
            [417, 818, 56, 57, 0, 0, 0],
            [475, 818, 51, 57, 0, 0, 0],
            [528, 818, 43, 56, 0, 0, 0],
            [573, 818, 26, 56, 0, 0, 0],
            [601, 818, 11, 57, 0, 0, 0],
            [614, 818, 26, 56, 0, 0, 0],
            [642, 818, 43, 56, 0, 0, 0],
            [687, 818, 51, 57, 0, 0, 0],
            [740, 818, 56, 57, 0, 0, 0],
            [798, 818, 53, 53, 0, 0, 0],
            [853, 818, 53, 53, 0, 0, 0],
            [908, 818, 67, 71, 0, 0, 0],
            [2, 891, 53, 53, 0, 0, 0],
            [57, 891, 53, 53, 0, 0, 0],
            [112, 891, 70, 113, 0, 0, 0],
            [184, 891, 70, 113, 0, 0, 0],
            [256, 891, 53, 53, 0, 0, 0],
            [311, 891, 53, 53, 0, 0, 0],
            [366, 891, 53, 53, 0, 0, 0],
            [421, 891, 53, 53, 0, 0, 0],
            [476, 891, 205, 61, 0, 0, 0]
        ],
        "animations": {
            "afterCollision": { "frames": [0, 1, 2, 3, 4] },
            "ArrowGame": { "frames": [5] },
            "boom": { "frames": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
            "enemy": { "frames": [17, 18],
                "speed": 0.5 },
            "exit": { "frames": [19] },
            "gameOver": { "frames": [20] },
            "info": { "frames": [21] },
            "infoActive": { "frames": [22] },
            "Live": { "frames": [23, 24, 25, 26, 27, 28, 29, 30, 31, 32] },
            "menu": { "frames": [33] },
            "menuActive": { "frames": [34] },
            "meteor": { "frames": [35] },
            "music": { "frames": [36] },
            "musicActive": { "frames": [37] },
            "player": { "frames": [38, 39],
                "speed": 0.5 },
            "replay": { "frames": [40] },
            "replayActive": { "frames": [41] },
            "Settings": { "frames": [42] },
            "settingsActive": { "frames": [43] },
            "start": { "frames": [44] }
        }
    };
    var assetManifest = [
        { id: "space", src: "/Assets/images/space.png" },
        { id: "gamearrow", src: "/Assets/images/ArrowGame.png" },
        { id: "explosion", src: "/Assets/audio/explosion.mp3" },
        { id: "bulletSound", src: "/Assets/audio/bullet.mp3" },
        { id: "meteorSound", src: "/Assets/audio/meteorSound.mp3" },
        { id: "gameSound", src: "/Assets/audio/space.mp3" },
        { id: "extralive", src: "/Assets/audio/extralive.mp3" },
        { id: "pep", src: "/Assets/audio/pep.mp3" }
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
        managers.Game.sceneObject = currentScene;
        //add the new scene object to stage
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=gamets.js.map