class Diamond{

    constructor(){}

    static makeDiamond(char) {
        
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        let arr1 = alphabet.slice( 0, alphabet.indexOf(char)+1 );
        let length = 2 * (alphabet.indexOf(char)+1) - 1;
        
        function logging(arr) {

            let result = "";

            arr.forEach((char) => {
                
                let index = alphabet.indexOf(char)
                if(char == "A") { result += " ".repeat((length-1)/2) + "A" + " ".repeat( (length-1) / 2 ) + "\n"  }
                else{
                    
                    result  +=  " ".repeat(((length-1)/2)-index)
                                + char
                                + " ".repeat(2*index-1)
                                + char
                                + " ".repeat(((length-1)/2)-index) + "\n"
                }
            })

            return result
        }

        //  first part
        let part1 = logging( arr1 );
        
        //  second part
        let arr2 = arr1.reverse().slice(1,arr1.length);
        let part2 = logging( arr2 );

        return part1 + part2;
    }

}

module.exports = Diamond;
