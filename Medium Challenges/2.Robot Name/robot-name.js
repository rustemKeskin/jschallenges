Math.seedrandom = require('seedrandom');

class Robot{

    static produced = [];

    constructor(){}
    
    name() {  
        if( this.randomName ) {
            return this.randomName
        }
        else{
            
            function produceName(){
    
                let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let result = [];
    
                for(let i = 0; i < 2; i++) {
        
                    result[i] = alphabet[Math.round(Math.random()*25)]
                }
                for(let i = 0; i < 3; i++) {
                    
                    result.push(Math.round(Math.random()*9))
                }
    
                return result.join("");
            };
    
            let result = produceName()
            
            if( Robot.produced.includes(result) ) {   
                
                result = produceName();
     
                Robot.produced.push( result );
                this.randomName = result;
            }
            else{
            
                Robot.produced.push( result );
                this.randomName = result;
            }
    
            return result   
        }
    }
    reset(){
        let index = Robot.produced.indexOf(this.randomName);
        Robot.produced.splice(index,1);
        this.randomName=undefined
    }
}




module.exports = Robot;
