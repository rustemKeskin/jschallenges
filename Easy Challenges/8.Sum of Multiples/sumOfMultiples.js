class SumOfMultiples {

    constructor(...arg) { this.divisors = arg;  }

    to(number){
        
        let result = [];  let arr = [];

        for(let i = 1; i < number; i++){ arr.push(i) }
        
        arr.forEach(el => {

           if( this.divisors.some(d => el%d == 0) )
           {  result.push(el)  }
        })

        return result.reduce((a,b) => a+b )
    }

    static to(number){

        let result = [];
        for(let i = 0; i < number; i++){

            if( i%3 == 0 || i%5 == 0 ){   result.push(i)   }
        }
        return result.reduce((a,b) => a+b )
    }
}






module.exports = SumOfMultiples;