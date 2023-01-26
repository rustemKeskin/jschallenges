class Octal{

    constructor(string) {   this.octal = string;    }

    toDecimal(){

        let arr = this.octal.split('').reverse();

        for(let i = 0; i < arr.length; i++){

            if( isNaN( Number(arr[i]) ) ) {  return 0   }
            else if(Number(arr[i]) >= 8)   {  return 0   }
        }

        let result = 0;
        for(let i = 0; i < arr.length; i++ ) {
            result +=  arr[i] * Math.pow(8, i);
        }

        return result
    }
}



module.exports = Octal;
