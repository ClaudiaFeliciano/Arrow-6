//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue; //hold everything that i want to load ( load the array of the manifest)
    let currentScene: objects.Scene;
    let currentState: config.Scene;
    let keyboardManager: managers.Keyboard;
    let textureArrowData: any;
    let textureArrow: createjs.SpriteSheet;

    textureArrowData = {
        "images": ["./Assets/sprites/textureArrowData.png"],

        "frames": [
            [2, 2, 70, 113, 0, 0, 0],
            [74, 2, 70, 113, 0, 0, 0],
            [146, 2, 70, 113, 0, 0, 0],
            [218, 2, 70, 113, 0, 0, 0],
            [290, 2, 3, 3, 0, 0, 0],
            [2, 117, 425, 40, 0, 0, 0],
            [2, 159, 148, 143, 0, 0, 0],
            [152, 159, 134, 134, 0, 0, 0],
            [288, 159, 133, 141, 0, 0, 0],
            [2, 304, 133, 118, 0, 0, 0],
            [137, 304, 250, 203, 0, 0, 0],
            [2, 509, 250, 202, 0, 0, 0],
            [254, 509, 250, 203, 0, 0, 0],
            [2, 714, 250, 201, 0, 0, 0],
            [254, 714, 248, 202, 0, 0, 0],
            [2, 918, 248, 201, 0, 0, 0],
            [252, 918, 250, 197, 0, 0, 0],
            [2, 1121, 250, 202, 0, 0, 0],
            [254, 1121, 250, 201, 0, 0, 0],
            [2, 1325, 250, 200, 0, 0, 0],
            [254, 1325, 242, 199, 0, 0, 0],
            [2, 1527, 80, 85, 0, 0, 0],
            [84, 1527, 80, 84, 0, 0, 0],
            [166, 1527, 205, 61, 0, 0, 0],
            [373, 1527, 5, 4, 0, 0, 0],
            [380, 1527, 7, 7, 0, 0, 0],
            [389, 1527, 11, 11, 0, 0, 0],
            [402, 1527, 15, 15, 0, 0, 0],
            [419, 1527, 18, 18, 0, 0, 0],
            [439, 1527, 21, 22, 0, 0, 0],
            [462, 1527, 25, 24, 0, 0, 0],
            [2, 1614, 27, 27, 0, 0, 0],
            [31, 1614, 29, 29, 0, 0, 0],
            [62, 1614, 31, 30, 0, 0, 0],
            [95, 1614, 31, 30, 0, 0, 0],
            [128, 1614, 32, 31, 0, 0, 0],
            [162, 1614, 32, 31, 0, 0, 0],
            [196, 1614, 32, 31, 0, 0, 0],
            [230, 1614, 32, 31, 0, 0, 0],
            [264, 1614, 32, 31, 0, 0, 0],
            [298, 1614, 32, 31, 0, 0, 0],
            [332, 1614, 32, 32, 0, 0, 0],
            [366, 1614, 32, 32, 0, 0, 0],
            [400, 1614, 32, 32, 0, 0, 0],
            [434, 1614, 32, 32, 0, 0, 0],
            [468, 1614, 32, 32, 0, 0, 0],
            [2, 1648, 30, 32, 0, 0, 0],
            [34, 1648, 29, 28, 0, 0, 0],
            [65, 1648, 244, 31, 0, 0, 0],
            [311, 1648, 53, 53, 0, 0, 0],
            [366, 1648, 53, 53, 0, 0, 0],
            [421, 1648, 57, 57, 0, 0, 0],
            [2, 1707, 56, 57, 0, 0, 0],
            [60, 1707, 51, 57, 0, 0, 0],
            [113, 1707, 43, 56, 0, 0, 0],
            [158, 1707, 26, 56, 0, 0, 0],
            [186, 1707, 11, 57, 0, 0, 0],
            [199, 1707, 26, 56, 0, 0, 0],
            [227, 1707, 43, 56, 0, 0, 0],
            [272, 1707, 51, 57, 0, 0, 0],
            [325, 1707, 56, 57, 0, 0, 0],
            [383, 1707, 53, 53, 0, 0, 0],
            [438, 1707, 53, 53, 0, 0, 0],
            [2, 1766, 67, 71, 0, 0, 0],
            [71, 1766, 27, 23, 0, 0, 0],
            [100, 1766, 27, 23, 0, 0, 0],
            [129, 1766, 27, 23, 0, 0, 0],
            [158, 1766, 26, 25, 0, 0, 0],
            [186, 1766, 25, 25, 0, 0, 0],
            [213, 1766, 23, 25, 0, 0, 0],
            [238, 1766, 24, 25, 0, 0, 0],
            [264, 1766, 25, 24, 0, 0, 0],
            [291, 1766, 26, 24, 0, 0, 0],
            [319, 1766, 26, 24, 0, 0, 0],
            [347, 1766, 27, 25, 0, 0, 0],
            [376, 1766, 27, 25, 0, 0, 0],
            [405, 1766, 27, 25, 0, 0, 0],
            [434, 1766, 26, 24, 0, 0, 0],
            [462, 1766, 27, 23, 0, 0, 0],
            [2, 1839, 27, 23, 0, 0, 0],
            [31, 1839, 27, 23, 0, 0, 0],
            [60, 1839, 27, 22, 0, 0, 0],
            [89, 1839, 27, 22, 0, 0, 0],
            [118, 1839, 27, 23, 0, 0, 0],
            [147, 1839, 27, 22, 0, 0, 0],
            [176, 1839, 53, 53, 0, 0, 0],
            [231, 1839, 53, 53, 0, 0, 0],
            [286, 1839, 70, 113, 0, 0, 0],
            [358, 1839, 70, 113, 0, 0, 0],
            [430, 1839, 53, 53, 0, 0, 0],
            [2, 1954, 53, 53, 0, 0, 0],
            [57, 1954, 16, 11, 0, 0, 0],
            [75, 1954, 53, 53, 0, 0, 0],
            [130, 1954, 53, 53, 0, 0, 0],
            [185, 1954, 15, 10, 0, 0, 0],
            [202, 1954, 24, 15, 0, 0, 0],
            [228, 1954, 205, 61, 0, 0, 0]
        ],

        "animations": {
            "afterCollision": { "frames": [0, 1, 2, 3, 4] },
            "ArrowGame": { "frames": [5] },
            "asteroid_render": { "frames": [6, 7, 8, 9] },
            "boom": { "frames": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "speed": 0.20 },
            "enemy": { "frames": [21, 22],
            "speed": 0.5 },
            "exit": { "frames": [23] },
            "expl": { "frames": [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47] },
            "gameOver": { "frames": [48] },
            "info": { "frames": [49] },
            "infoActive": { "frames": [50] },
            "Live": { "frames": [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
            "menu": { "frames": [61] },
            "menuActive": { "frames": [62] },
            "meteor1": { "frames": [63] },
            "meteor": { "frames": [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84] },
            "music": { "frames": [85, 86] },          
            "player": {
                "frames": [87, 88],
                "speed": 0.5
            },
            "replay": { "frames": [89] },
            "replayActive": { "frames": [90] },
            "rocket": { "frames": [91] },
            "settings": { "frames": [92, 93] },           
            "shot": { "frames": [94, 95] },
            "start": { "frames": [96] }
        }

    };

    let assetManifest = [
        { id: "space", src: "/Assets/images/space.png" },
        { id: "gamearrow", src: "/Assets/images/ArrowGame.png" },
        { id: "explosion", src: "/Assets/audio/explosion.mp3" },
        { id: "bulletSound", src: "/Assets/audio/bullet.mp3" },
        { id: "meteorSound", src: "/Assets/audio/meteorSound.mp3" },
        { id: "gameSound", src: "/Assets/audio/space.mp3" },
        { id: "shootSound", src: "/Assets/audio/bullet.mp3" },
        { id: "extralive", src: "/Assets/audio/extralive.mp3" },
        { id: "startSound", src: "/Assets/audio/startSound.mp3" },
        { id: "pep", src: "/Assets/audio/pep.mp3" }

    ]; // Basycally an array struct. Placeholder

    function Init(): void {
        console.log(`%c Game Started...`, "font-size: 20px;");
        textureArrow = new createjs.SpriteSheet(textureArrowData);
        assetManager = new createjs.LoadQueue(); //create the asset manager
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); //asset manager can load sound- enable sound preloading
        assetManager.loadManifest(assetManifest); //Loads the manifest defined above -preloads all assets listed in the manifest
        assetManager.on("complete", Start, this); // call Start when assets are finished loading
    }

    function Start(): void {
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
    function Update(): void {
        currentScene.Update();
        // if the scene that is playing returns anthr scene
        //then call Main again and switch the scene
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update(); //redraws the state
    }

    function Main(): void {
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
