// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.


class Triangle{

    constructor(x,y,z){

        if( x <= 0 || y <= 0 || z <= 0 ) {   throw new Error("invalid length")   }
        else if( x+y<=z || x+z<=y || z+y<=x ) { throw new Error("invalid length")}
        else{

            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
    
    kind(){

        if(this.x === this.y && this.y === this.z){ return "equilateral"  }

        else if( this.x != this.y && this.y != this.z && this.x != this.z )
        {return "scalene"}

        else{ return "isosceles" }
    }
}


module.exports = Triangle;





