class PerfectNumber{
    
    constructor(){}
    static classify(number){

        let divisors = [];
        for(let i = 0; i<number; i++) {

            if(number%i === 0) {    divisors.push(i)    }
        }

        if(divisors.reduce((a,b) => a+b) === number) { return "perfect"}
        else if(divisors.reduce((a,b) => a+b) < number) { return "deficient"}
        else if(divisors.reduce((a,b) => a+b) > number) { return "abundant" }
    }
}

module.exports = PerfectNumber;
