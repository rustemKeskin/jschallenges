class Series{

    constructor(string) {    this.serie = string;   }

    slices(num) {

        let result = [];

        if( num > this.serie.length ) { throw new Error("invalid input") }

        for( let i=0; i <= this.serie.length-num; i++ ) {

            let sliced = this.serie.slice(i, i+num);
            let arr = sliced.split('').map(el => Number(el));
            result.push(arr)
        }

        return result
    }
}

module.exports = Series