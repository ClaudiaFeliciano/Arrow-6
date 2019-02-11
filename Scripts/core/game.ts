//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue; //hold everything that i want to load ( load the array of the manifest)
    let currentScene: objects.Scene;
    let currentState: config.Scene;

    let assetManifest = [
        { id: "startButton", src: "/Assets/images/startButton.png" }, //id le pongo el nombre k desee
        { id: "restartButton", src: "/Assets/images/restartButton.png" },
        { id: "plane", src: "/Assets/images/plane.png" },
        { id: "meteor", src: "/Assets/images/meteor.png" },
        { id: "island", src: "/Assets/images/island.png" },
        { id: "space", src: "/Assets/images/space.png" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "bulletSound", src: "/Assets/audio/bullet.ogg" }
        // { id: "arrowsound", src: "/Assets/audio/arrowsound.mpeg" }

    ]; // Basycally an array struct. Placeholder


    function Init(): void {
        assetManager = new createjs.LoadQueue(); //create the asset manager
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); //asset manager can load sound- enable sound preloading
        assetManager.loadManifest(assetManifest); //Loads the manifest defined above -preloads all assets listed in the manifest
        assetManager.on("complete", Start, this); // call Start when assets are finished loading
    }

    function Start(): void {
        console.log(`%c Game Started...`, "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.currentState = currentState;//it makes a refrence to my stage and I hold it in my global object
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
        //add the new scene object to stage
        stage.addChild(currentScene);

    }

    window.addEventListener("load", Init);
})();