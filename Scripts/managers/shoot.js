var managers;
(function (managers) {
    var Shoot = /** @class */ (function () {
        function Shoot() {
            this.swi = 0;
            this.Start();
        }
        Shoot.prototype._buildShootPool = function () {
            for (var count = 0; count < this._shootCount; count++) {
                this.Shoots[count] = new objects.Shoot();
            }
        };
        Shoot.prototype.Start = function () {
            this._shootCount = 50; //set the default shoot account
            this.Shoots = new Array(); // create the shoot container
            this._buildShootPool(); //build shoot array
            this.CurrentShoot = 0; //set the Current shoot to 0
        };
        Shoot.prototype.Update = function () {
            this.Shoots.forEach(function (shoot) {
                shoot.Update();
            });
        };
        return Shoot;
    }());
    managers.Shoot = Shoot;
})(managers || (managers = {}));
//# sourceMappingURL=shoot.js.map