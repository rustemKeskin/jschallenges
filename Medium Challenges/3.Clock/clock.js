class Clock{

    constructor(){

        this.toString = function() {

            let arg1 = Number( this.time.split('').slice(0,2).join('') );
            let arg2 = Number( this.time.split('').slice(3,5).join('') );

            if( arg1 == "24" ) {  return `00:${arg2}`  }
            else {  return this.time    }
        };
        this.add = function(arg) {

            let arg1 = Number( this.time.split('').slice(0,2).join('') );
            let arg2 = Number( this.time.split('').slice(3,5).join('') );

            return Clock.at(arg1,arg2+arg);
        };
        this.subtract = function(arg) {
            
            let arg1 = Number( this.time.split('').slice(0,2).join('') );
            let arg2 = Number( this.time.split('').slice(3,5).join('') );

            return Clock.at( arg1, arg2-arg );
        };
        this.isEqual = function(obj) {
            return this.toString() == obj.toString();
        };
    }

    static at( arg1, arg2 = "00" ) {

        let clock = new Clock();    arg1 = Number(arg1);    arg2 = Number(arg2);

        while( arg1 < 0 || arg1 > 24 || arg2 < 0 || arg2 > 60 ) {
            
            if(arg2 > 60) { arg1 = arg1 + Math.floor(arg2/60);              arg2 = arg2 % 60;                 }
            if(arg2 < 0 ) { arg1 = arg1 - Math.floor(Math.abs(arg2/60))-1;  arg2 = 60 - Math.abs( arg2 % 60 ) }
            if(arg1 > 24) { arg1 = arg1 % 24 }
            if(arg1 < 0 ) { arg1 = 24-Math.abs(arg1%24) }
        }
        
        if( String(arg1).length < 2 ) { arg1 = "0" + arg1 }
        if( String(arg2).length < 2 ) { arg2 = "0" + arg2 }

        clock.time = `${arg1}:${arg2}`;
        return clock;
    }

}


module.exports = Clock;
