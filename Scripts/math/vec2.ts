module math{
    export class Vec2 extends createjs.Point{


        constructor(x: number =0, y: number = 0){
            super(x, y);
        }

        /**
         * This method returns the Euclidean Distance between vec1 and vec2
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {number}
         */
        public static Distance(vec1:math.Vec2, vec2:math.Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        }

        /**
         * This method returns the resultant vector when adding vec1 and vec2
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {math.Vec2}
         */
        public static Add(vec1:math.Vec2, vec2:math.Vec2):math.Vec2 {

            let result:math.Vec2 = new math.Vec2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        }

        /**
         * This method subtracts vec2 from vec1 and returns a Vec2 result
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {math.Vec2} vec2
         * @returns {math.Vec2}
         */
        public static Subtract(vec1:math.Vec2, vec2:math.Vec2):math.Vec2 {

            let result:math.Vec2 = new math.Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }

        /**
         * This method multiplies a Vec2 object by a scalar and returns the result
         * as a new Vec2 object
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {number} scalar
         * @returns {math.Vec2}
         */
        public static Mulitply(vec1:math.Vec2, scalar:number):math.Vec2 {
            return new math.Vec2(vec1.x * scalar, vec1.y * scalar);
        }

        /**
         * This method Divides a Vec2 object by a scalar and returns the result
         * as a new Vec2 object
         *
         * @static
         * @param {math.Vec2} vec1
         * @param {number} scalar
         * @returns {math.Vec2}
         * @memberof Vec2
         */
        public static Divide(vec1:math.Vec2, scalar:number):math.Vec2 {
            return new math.Vec2(vec1.x / scalar, vec1.y / scalar);
        }


        // Convenience Methods
        public static up():math.Vec2 {
            return new math.Vec2(0, -1);
        }

        public static down():math.Vec2 {
            return new math.Vec2(0, 1);
        }

        public static right():math.Vec2 {
            return new math.Vec2(1, 0);
        }

        public static left():math.Vec2 {
            return new math.Vec2(-1, 0);
        }

        public static zero():math.Vec2 {
            return new math.Vec2(0, 0);
        }
    }
}