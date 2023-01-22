class DNA {

    constructor(str){

        this.str = str;
    }

    hammingDistance(str2) {

        let length = this.str.length < str2.length ? this.str.length : str2.length;
        let count = 0;
        for(let i = 0; i < length; i++) {   

            if( this.str[i] != str2[i] ) {  count++  }
            
        }
        return count;
    }

}

module.exports = DNA