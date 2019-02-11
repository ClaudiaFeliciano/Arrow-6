var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // public properties
        // constructor
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._meteorNum = 3;
            // Instantiates a new Array container of Type objects.Cloud
            this._meteor = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._meteorNum; count++) {
                this._meteor[count] = new objects.Meteor();
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            this._space.Update();
            this._player.Update();
            this._island.Update();
            // Update Each cloud in the Cloud Array
            for (var _i = 0, _a = this._meteor; _i < _a.length; _i++) {
                var cloud = _a[_i];
                cloud.Update();
            }
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Main = function () {
            // adds space to the scene
            this._space = new objects.Space();
            this.addChild(this._space);
            // adds island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // adds Each Cloud in the Cloud Array to the Scene
            for (var _i = 0, _a = this._meteor; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map