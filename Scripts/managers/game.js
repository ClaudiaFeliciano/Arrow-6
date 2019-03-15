var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.highScore = 0;
        // player Direction
        Game.goingLeft = true;
        Game.goingRigth = false;
        Game.goingUp = false;
        Game.goingDown = false;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map