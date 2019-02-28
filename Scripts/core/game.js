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
            [2, 2, 400, 152, 0, 0, 0],
            [404, 2, 80, 85, 0, 0, 0],
            [2, 156, 80, 84, 0, 0, 0],
            [84, 156, 150, 76, 0, 0, 0],
            [236, 156, 67, 71, 0, 0, 0],
            [305, 156, 151, 77, 0, 0, 0],
            [2, 242, 70, 113, 0, 0, 0],
            [74, 242, 70, 113, 0, 0, 0],
            [146, 242, 151, 77, 0, 0, 0],
            [299, 242, 151, 77, 0, 0, 0],
            [2, 357, 151, 77, 0, 0, 0]
        ],
        "animations": {
            "arrow": { "frames": [0] },
            "enemy": { "frames": [1, 2] },
            "exit": { "frames": [3] },
            "meteor": { "frames": [4] },
            "play": { "frames": [5] },
            "player": {
                "frames": [6, 7],
                "speed": 0.5
            },
            "restart": { "frames": [8] },
            "resume": { "frames": [9] },
            "setting": { "frames": [10] }
        }
    };
    var assetManifest = [
        { id: "space", src: "/Assets/images/space.png" },
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