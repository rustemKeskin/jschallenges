class Anagram{

    constructor (word){   this.word  = word;   }

    match( arr ) {

        let result = [];

        // lowercase first arg
        let firstArg = this.word.split('').map( l => l.toLowerCase()).sort().join('');

        // lowercase second arg
        let newArr = arr.map( word => {
            return word.split('').map(l => l.toLowerCase()).sort().join('')
        })

        for( let i = 0; i < newArr.length ; i++){

            if(newArr[i] == firstArg && this.word.toLowerCase() != arr[i].toLowerCase()) 
            { result.push(arr[i]) }
        }

        return result;
    }
}


module.exports = Anagram;
