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
        images: ["./Assets/sprites/textureArrowData.png"],
        frames: [
            [2, 2, 62, 58, 0, 0, 0],
            [66, 2, 62, 53, 0, 0, 0],
            [130, 2, 62, 52, 0, 0, 0],
            [194, 2, 60, 54, 0, 0, 0],
            [256, 2, 57, 62, 0, 0, 0],
            [315, 2, 54, 63, 0, 0, 0],
            [371, 2, 52, 62, 0, 0, 0],
            [425, 2, 54, 59, 0, 0, 0],
            [481, 2, 63, 58, 0, 0, 0],
            [546, 2, 62, 53, 0, 0, 0],
            [610, 2, 63, 52, 0, 0, 0],
            [675, 2, 60, 54, 0, 0, 0],
            [737, 2, 58, 62, 0, 0, 0],
            [797, 2, 53, 63, 0, 0, 0],
            [852, 2, 52, 63, 0, 0, 0],
            [906, 2, 54, 59, 0, 0, 0],
            [962, 2, 34, 32, 0, 0, 0],
            [2, 67, 34, 30, 0, 0, 0],
            [38, 67, 34, 31, 0, 0, 0],
            [74, 67, 34, 33, 0, 0, 0],
            [110, 67, 33, 35, 0, 0, 0],
            [145, 67, 30, 35, 0, 0, 0],
            [177, 67, 31, 34, 0, 0, 0],
            [210, 67, 33, 34, 0, 0, 0],
            [245, 67, 34, 32, 0, 0, 0],
            [281, 67, 34, 29, 0, 0, 0],
            [317, 67, 33, 31, 0, 0, 0],
            [352, 67, 34, 33, 0, 0, 0],
            [388, 67, 32, 35, 0, 0, 0],
            [422, 67, 30, 35, 0, 0, 0],
            [454, 67, 31, 34, 0, 0, 0],
            [487, 67, 33, 34, 0, 0, 0],
            [522, 67, 34, 32, 0, 0, 0],
            [558, 67, 34, 30, 0, 0, 0],
            [594, 67, 34, 31, 0, 0, 0],
            [630, 67, 34, 33, 0, 0, 0],
            [666, 67, 33, 35, 0, 0, 0],
            [701, 67, 30, 35, 0, 0, 0],
            [733, 67, 31, 34, 0, 0, 0],
            [766, 67, 33, 34, 0, 0, 0],
            [801, 67, 34, 32, 0, 0, 0],
            [837, 67, 34, 29, 0, 0, 0],
            [873, 67, 33, 31, 0, 0, 0],
            [908, 67, 34, 33, 0, 0, 0],
            [944, 67, 32, 35, 0, 0, 0],
            [978, 67, 30, 35, 0, 0, 0],
            [2, 104, 31, 34, 0, 0, 0],
            [35, 104, 33, 34, 0, 0, 0],
            [70, 104, 70, 113, 0, 0, 0],
            [142, 104, 70, 113, 0, 0, 0],
            [214, 104, 70, 113, 0, 0, 0],
            [286, 104, 70, 113, 0, 0, 0],
            [358, 104, 3, 3, 0, 0, 0],
            [363, 104, 425, 40, 0, 0, 0],
            [790, 104, 148, 143, 0, 0, 0],
            [2, 249, 134, 134, 0, 0, 0],
            [138, 249, 133, 141, 0, 0, 0],
            [273, 249, 133, 118, 0, 0, 0],
            [408, 249, 250, 203, 0, 0, 0],
            [660, 249, 250, 202, 0, 0, 0],
            [2, 454, 250, 203, 0, 0, 0],
            [254, 454, 250, 201, 0, 0, 0],
            [506, 454, 248, 202, 0, 0, 0],
            [756, 454, 248, 201, 0, 0, 0],
            [2, 659, 250, 197, 0, 0, 0],
            [254, 659, 250, 202, 0, 0, 0],
            [506, 659, 250, 201, 0, 0, 0],
            [758, 659, 250, 200, 0, 0, 0],
            [2, 863, 242, 199, 0, 0, 0],
            [246, 863, 300, 50, 0, 0, 0],
            [548, 863, 64, 59, 0, 0, 0],
            [614, 863, 69, 57, 0, 0, 0],
            [685, 863, 66, 56, 0, 0, 0],
            [753, 863, 61, 56, 0, 0, 0],
            [816, 863, 58, 64, 0, 0, 0],
            [876, 863, 56, 69, 0, 0, 0],
            [934, 863, 55, 66, 0, 0, 0],
            [2, 1064, 56, 60, 0, 0, 0],
            [60, 1064, 64, 59, 0, 0, 0],
            [126, 1064, 69, 57, 0, 0, 0],
            [197, 1064, 66, 56, 0, 0, 0],
            [265, 1064, 60, 56, 0, 0, 0],
            [327, 1064, 59, 64, 0, 0, 0],
            [388, 1064, 56, 69, 0, 0, 0],
            [446, 1064, 56, 66, 0, 0, 0],
            [504, 1064, 56, 60, 0, 0, 0],
            [562, 1064, 80, 85, 0, 0, 0],
            [644, 1064, 80, 84, 0, 0, 0],
            [726, 1064, 205, 61, 0, 0, 0],
            [933, 1064, 5, 4, 0, 0, 0],
            [940, 1064, 7, 7, 0, 0, 0],
            [949, 1064, 11, 11, 0, 0, 0],
            [962, 1064, 15, 15, 0, 0, 0],
            [979, 1064, 18, 18, 0, 0, 0],
            [999, 1064, 21, 22, 0, 0, 0],
            [2, 1151, 25, 24, 0, 0, 0],
            [29, 1151, 27, 27, 0, 0, 0],
            [58, 1151, 29, 29, 0, 0, 0],
            [89, 1151, 31, 30, 0, 0, 0],
            [122, 1151, 31, 30, 0, 0, 0],
            [155, 1151, 32, 31, 0, 0, 0],
            [189, 1151, 32, 31, 0, 0, 0],
            [223, 1151, 32, 31, 0, 0, 0],
            [257, 1151, 32, 31, 0, 0, 0],
            [291, 1151, 32, 31, 0, 0, 0],
            [325, 1151, 32, 31, 0, 0, 0],
            [359, 1151, 32, 32, 0, 0, 0],
            [393, 1151, 32, 32, 0, 0, 0],
            [427, 1151, 32, 32, 0, 0, 0],
            [461, 1151, 32, 32, 0, 0, 0],
            [495, 1151, 32, 32, 0, 0, 0],
            [529, 1151, 30, 32, 0, 0, 0],
            [561, 1151, 29, 28, 0, 0, 0],
            [592, 1151, 244, 31, 0, 0, 0],
            [838, 1151, 53, 53, 0, 0, 0],
            [893, 1151, 53, 53, 0, 0, 0],
            [948, 1151, 57, 57, 0, 0, 0],
            [2, 1210, 56, 57, 0, 0, 0],
            [60, 1210, 51, 57, 0, 0, 0],
            [113, 1210, 43, 56, 0, 0, 0],
            [158, 1210, 26, 56, 0, 0, 0],
            [186, 1210, 11, 57, 0, 0, 0],
            [199, 1210, 26, 56, 0, 0, 0],
            [227, 1210, 43, 56, 0, 0, 0],
            [272, 1210, 51, 57, 0, 0, 0],
            [325, 1210, 56, 57, 0, 0, 0],
            [383, 1210, 53, 53, 0, 0, 0],
            [438, 1210, 53, 53, 0, 0, 0],
            [493, 1210, 67, 71, 0, 0, 0],
            [562, 1210, 27, 23, 0, 0, 0],
            [591, 1210, 27, 23, 0, 0, 0],
            [620, 1210, 27, 23, 0, 0, 0],
            [649, 1210, 26, 25, 0, 0, 0],
            [677, 1210, 25, 25, 0, 0, 0],
            [704, 1210, 23, 25, 0, 0, 0],
            [729, 1210, 24, 25, 0, 0, 0],
            [755, 1210, 25, 24, 0, 0, 0],
            [782, 1210, 26, 24, 0, 0, 0],
            [810, 1210, 26, 24, 0, 0, 0],
            [838, 1210, 27, 25, 0, 0, 0],
            [867, 1210, 27, 25, 0, 0, 0],
            [896, 1210, 27, 25, 0, 0, 0],
            [925, 1210, 26, 24, 0, 0, 0],
            [953, 1210, 27, 23, 0, 0, 0],
            [982, 1210, 27, 23, 0, 0, 0],
            [2, 1283, 27, 23, 0, 0, 0],
            [31, 1283, 27, 22, 0, 0, 0],
            [60, 1283, 27, 22, 0, 0, 0],
            [89, 1283, 27, 23, 0, 0, 0],
            [118, 1283, 27, 22, 0, 0, 0],
            [147, 1283, 53, 53, 0, 0, 0],
            [202, 1283, 53, 53, 0, 0, 0],
            [257, 1283, 70, 113, 0, 0, 0],
            [329, 1283, 70, 113, 0, 0, 0],
            [401, 1283, 31, 27, 0, 0, 0],
            [434, 1283, 37, 32, 0, 0, 0],
            [473, 1283, 42, 35, 0, 0, 0],
            [517, 1283, 46, 38, 0, 0, 0],
            [565, 1283, 49, 42, 0, 0, 0],
            [616, 1283, 51, 42, 0, 0, 0],
            [669, 1283, 54, 44, 0, 0, 0],
            [725, 1283, 56, 45, 0, 0, 0],
            [783, 1283, 58, 46, 0, 0, 0],
            [843, 1283, 59, 47, 0, 0, 0],
            [904, 1283, 61, 48, 0, 0, 0],
            [2, 1398, 62, 49, 0, 0, 0],
            [66, 1398, 62, 50, 0, 0, 0],
            [130, 1398, 63, 51, 0, 0, 0],
            [195, 1398, 63, 52, 0, 0, 0],
            [260, 1398, 63, 52, 0, 0, 0],
            [325, 1398, 64, 53, 0, 0, 0],
            [391, 1398, 64, 53, 0, 0, 0],
            [457, 1398, 64, 53, 0, 0, 0],
            [523, 1398, 64, 54, 0, 0, 0],
            [589, 1398, 64, 54, 0, 0, 0],
            [655, 1398, 64, 54, 0, 0, 0],
            [721, 1398, 64, 54, 0, 0, 0],
            [787, 1398, 64, 54, 0, 0, 0],
            [853, 1398, 64, 54, 0, 0, 0],
            [919, 1398, 64, 54, 0, 0, 0],
            [2, 1454, 64, 54, 0, 0, 0],
            [68, 1454, 64, 54, 0, 0, 0],
            [134, 1454, 64, 56, 0, 0, 0],
            [200, 1454, 64, 56, 0, 0, 0],
            [266, 1454, 64, 56, 0, 0, 0],
            [332, 1454, 64, 52, 0, 0, 0],
            [398, 1454, 269, 184, 0, 0, 0],
            [669, 1454, 269, 184, 0, 0, 0],
            [940, 1454, 53, 53, 0, 0, 0],
            [2, 1640, 53, 53, 0, 0, 0],
            [57, 1640, 16, 11, 0, 0, 0],
            [75, 1640, 12, 34, 0, 0, 0],
            [89, 1640, 12, 34, 0, 0, 0],
            [103, 1640, 12, 35, 0, 0, 0],
            [117, 1640, 12, 35, 0, 0, 0],
            [131, 1640, 12, 35, 0, 0, 0],
            [145, 1640, 12, 36, 0, 0, 0],
            [159, 1640, 12, 36, 0, 0, 0],
            [173, 1640, 12, 36, 0, 0, 0],
            [187, 1640, 12, 35, 0, 0, 0],
            [201, 1640, 12, 36, 0, 0, 0],
            [215, 1640, 12, 36, 0, 0, 0],
            [229, 1640, 12, 36, 0, 0, 0],
            [243, 1640, 12, 37, 0, 0, 0],
            [257, 1640, 12, 35, 0, 0, 0],
            [271, 1640, 12, 35, 0, 0, 0],
            [285, 1640, 12, 36, 0, 0, 0],
            [299, 1640, 53, 53, 0, 0, 0],
            [354, 1640, 53, 53, 0, 0, 0],
            [409, 1640, 15, 10, 0, 0, 0],
            [426, 1640, 24, 15, 0, 0, 0],
            [452, 1640, 205, 61, 0, 0, 0],
            [659, 1640, 37, 103, 0, 0, 0],
            [698, 1640, 37, 103, 0, 0, 0],
            [2, 1745, 315, 56, 0, 0, 0],
            [319, 1745, 313, 56, 0, 0, 0],
            [2, 1803, 475, 74, 0, 0, 0],
            [479, 1803, 81, 64, 0, 0, 0],
            [562, 1803, 81, 64, 0, 0, 0],
            [645, 1803, 297, 39, 0, 0, 0],
        ],
        // prettier-ignore
        animations: {
            "a10000": { "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
            "smallmeteor": {
                "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                "speed": 0.2
            },
            "brouncerock": {
                "frames": [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
                "speed": 0.8
            },
            "afterCollision": {
                "frames": [48, 49, 50, 51, 52],
                "speed": 0.11
            },
            "ArrowGame": { "frames": [53] },
            "asteroid": { "frames": [54, 55, 56, 57] },
            "boom": {
                "frames": [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
                "speed": 0.2
            },
            "table": { "frames": [69] },
            "asteroideFare": {
                "frames": [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
                "speed": 0.2
            },
            "enemy": { "frames": [86, 87] },
            "exit": { "frames": [88] },
            "expl": { "frames": [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112] },
            "gameOver": { "frames": [113] },
            "info": { "frames": [114, 115] },
            "Live": { "frames": [116, 117, 118, 119, 120, 121, 122, 123, 124, 125] },
            "menu": { "frames": [126, 127] },
            "meteor1": { "frames": [128] },
            "meteor": { "frames": [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149] },
            "music": { "frames": [150, 151] },
            "player": { "frames": [152, 153] },
            "explosionsmoke": { "frames": [154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185] },
            "redEnemy": { "frames": [186, 187] },
            "replay": { "frames": [188] },
            "replayActive": { "frames": [189] },
            "rocket": { "frames": [190] },
            "rocket_1": { "frames": [191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206] },
            "settings": { "frames": [207, 208] },
            "shot": { "frames": [209] },
            "shot2": { "frames": [210] },
            "start": { "frames": [211] },
            "sonenemy": { "frames": [212, 213] },
            "level2": { "frames": [214] },
            "level3": { "frames": [215] },
            "youwon": { "frames": [216] },
            "enemySecond": { "frames": [217, 218] },
            "information": { "frames": [219] }
        }
    };
    var assetManifest = [
        { id: "space", src: "/Assets/images/space.png" },
        { id: "spaceX", src: "/Assets/images/space1.jpg" },
        { id: "menu", src: "/Assets/images/ArrowGame.png" },
        { id: "level2start", src: "/Assets/images/level2Start.png" },
        { id: "menuBar", src: "/Assets/images/Window.png" },
        { id: "explosion", src: "/Assets/audio/explosion.mp3" },
        { id: "bulletSound", src: "/Assets/audio/bullet.mp3" },
        { id: "meteorSound", src: "/Assets/audio/meteorSound.mp3" },
        { id: "gameSound", src: "/Assets/audio/space.mp3" },
        { id: "shootSound", src: "/Assets/audio/bullet.mp3" },
        { id: "extralive", src: "/Assets/audio/extralive.mp3" },
        { id: "startSound", src: "/Assets/audio/startSound.mp3" },
        { id: "playerEngine", src: "/Assets/audio/playerEngine.wav" },
        { id: "overSound", src: "/Assets/audio/overSound.wav" },
        { id: "winSound", src: "/Assets/audio/winSound.ogg" },
        { id: "play3Sound", src: "/Assets/audio/play3Sound.ogg" },
        { id: "laser", src: "/Assets/audio/laser5.mp3" },
        { id: "pep", src: "/Assets/audio/pep.mp3" }
    ];
    function Init() {
        console.log("%c Game Started...", "font-size: 14px;");
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
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START1;
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
            case config.Scene.START1:
                currentScene = new scenes.Start1();
                break;
            case config.Scene.PLAY1:
                currentScene = new scenes.Play1();
                break;
            case config.Scene.START2:
                currentScene = new scenes.Start2();
                break;
            case config.Scene.PLAY2:
                currentScene = new scenes.Play2();
                break;
            case config.Scene.START3:
                currentScene = new scenes.Start3();
                break;
            case config.Scene.PLAY3:
                currentScene = new scenes.Play3();
                break;
            case config.Scene.WIN:
                currentScene = new scenes.Win();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
            case config.Scene.INFORMATION:
                currentScene = new scenes.Information();
                break;
        }
        managers.Game.sceneObject = currentScene;
        //add the new scene object to stage
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=gamets.js.map