var managers;
(function (managers) {
    var Shoot = /** @class */ (function () {
        // constructor
        function Shoot(bulletNum) {
            if (bulletNum === void 0) { bulletNum = 100; }
            this.BulletNum = bulletNum;
            this.Start();
        }
        Object.defineProperty(Shoot.prototype, "Shoots", {
            // public properties
            get: function () {
                return this._bullets;
            },
            set: function (newBulletArray) {
                this._bullets = newBulletArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shoot.prototype, "BulletNum", {
            get: function () {
                return this._bulletNum;
            },
            set: function (numberOfShoots) {
                this._bulletNum = numberOfShoots;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shoot.prototype, "CurrentBullet", {
            get: function () {
                return this._currentBullet;
            },
            set: function (newBulletPointer) {
                this._currentBullet = newBulletPointer;
            },
            enumerable: true,
            configurable: true
        });
        // public methods
        Shoot.prototype.Start = function () {
            // create the bullets container
            this.Shoots = new Array();
            // fill up bullet container
            for (var count = 0; count < this.BulletNum; count++) {
                this.Shoots[count] = new objects.Shoot();
            }
            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Shoots[this._currentBulletIndex];
            this.CurrentBullet.x = this.CurrentBullet.Position.x;
            this.CurrentBullet.y = this.CurrentBullet.Position.y;
            this.CurrentBullet.rotation = this.CurrentBullet.rotation;
        };
        Shoot.prototype.Update = function () {
            this.Shoots.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Shoot.prototype.FireBullet = function (spawnPoint, direction) {
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.x = spawnPoint.x;
            this.CurrentBullet.y = spawnPoint.y;
            if (managers.Game.goingDown) {
                this.CurrentBullet.Direction = math.Vec2.down();
            }
            if (managers.Game.goingUp) {
                this.CurrentBullet.Direction = math.Vec2.up();
            }
            if (managers.Game.goingLeft) {
                this.CurrentBullet.Direction = math.Vec2.left();
            }
            if (managers.Game.goingRigth) {
                this.CurrentBullet.Direction = math.Vec2.right();
            }
            //  this.CurrentBullet.Direction = direction;
            this.CurrentBullet.rotation = managers.Game.player.rotation;
            this.CurrentBullet.IsInPlay = true;
            this._currentBulletIndex++;
            if (this._currentBulletIndex >= this.Shoots.length) {
                this._currentBulletIndex = 0;
            }
            this.CurrentBullet = this.Shoots[this._currentBulletIndex];
        };
        return Shoot;
    }());
    managers.Shoot = Shoot;
})(managers || (managers = {}));
//# sourceMappingURL=shoot.js.map