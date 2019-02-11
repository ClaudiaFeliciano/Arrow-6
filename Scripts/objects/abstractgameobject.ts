module objects {
    export abstract class AbstractGameObject extends createjs.Bitmap { //clase abstracta
        // private instance variables
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;
        public isColliding: boolean;// I can track my collision

        // public properties
        get Width(): number {
            return this._width;
        }

        set Width(newValue: number) {
            this._width = newValue;
            this.HalfWidth = this._width * 0.5;
        }

        get Height(): number {
            return this._height;
        }

        set Height(newValue: number) {
            this._height = newValue;
            this.HalfHeight = this._height * 0.5;
        }

        get HalfHeight(): number {
            return this._halfHeight;
        }

        set HalfHeight(newValue: number) {
            this._halfHeight = newValue;
        }

        get HalfWidth(): number {
            return this._halfWidth;
        }

        set HalfWidth(newValue: number) {
            this._halfWidth = newValue;
        }

        // constructors
        constructor(imageString: string) {
            super(managers.Game.assetManager.getResult(imageString));
            // this.name= imageString; //name come from the superclass Bitmap            
            this._initialize();
        }

        // private methods
        private _initialize(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            /* this.HalfWidth = this.Width * 0.5;
             this.HalfHeight = this.Height * 0.5; //focus my objects on the middle
             this.regX = this.HalfWidth;
             this.regY= this.HalfHeight;*/
            this.isColliding = false;
        }

        // public methods
        public abstract Reset(): void;

        public abstract Start(): void;

        public abstract Update(): void;

        public abstract Destroy(): void;
    }
}