
function Node(){

    var data, next = null;

    this.getData = function(){
        return data;
    };
    this.setData = function(dataVal){
        data  = dataVal;
    };
    this.getnext = function(){
        return next
    };
    this.setnext = function(nextVal){
        next = nextVal
    }
};