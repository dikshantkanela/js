const myMath={
    PI: 3.14,
    add: function(x,y){
        return x+y;
    },
    subtract: function(x,y){
        return x-y;

    } ,
    multiply: function(x,y){
       return( x*y);
    },
    divide: function(x,y){
        return x/y;
    }
}
console.log(myMath.multiply(10,20))//200