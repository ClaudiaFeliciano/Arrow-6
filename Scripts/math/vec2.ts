module math {
    export class Vec2 extends createjs.Point {//Point has x& Y
        //private instance variables


        //cosntructors
        constructor(x: number = 0, y: number = 0) {
            super(x, y); //position object
        }

        //public methods
        //Pythagorean distance between two objects
        public static Distance(P1: Vec2, P2: Vec2): number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));// I am gonna reduce it to an even number
        }
    }
}
