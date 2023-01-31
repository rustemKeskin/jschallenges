class CustomSet{

    constructor(arr = []){

        this.data = [];  

        for(let i = 0; i < arr.length; i++){

            if( !this.contains(arr[i]) ){ this.data.push(arr[i]) }
        }
    }
    isEmpty(){  

        if( this.data.length == 0) { return true }  
        else{   return false    }
    }
    contains(numb){   return this.data.includes(numb)   }
    isSubset(obj) {

        let result = true
        if( this.data.length > obj.data.length ) {   return false    }

        for(let i = 0; i < this.data.length; i++) {

            if( !obj.data.includes(this.data[i]) ){ result = false; break; }
        }
        return result;
    }
    isDisjoint(obj){  

        let result = true;
        this.data.forEach(el => {

            if(obj.contains(el)){ result = false;  }
        })
        return result
    }
    isSame(obj) { 
        return this.data.sort().toString() == obj.data.sort().toString();
    }
    add(arg){
        if(!(this.contains(arg))){ this.data.push(arg) }
        return this
    }
    intersection(obj) {

        let result = new CustomSet();
        this.data.forEach(el => {  if( obj.contains(el) ){ result.add(el) }  })
        return result;
    }
    difference(obj) {
        let result = new CustomSet();
        this.data.forEach(el=>{

            if(!obj.contains(el)) {  result.add(el)    }
        })
        return result
    }
    union(obj){
        return new CustomSet(this.data.concat(obj.data))
    }
}


module.exports = CustomSet;
