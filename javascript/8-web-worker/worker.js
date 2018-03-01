var soma = function(accum,current){
    return accum+current;
}
this.onmessage = function (e){
 if(e.data.addThis !==undefined){
     this.postMessage({ result: e.data.addThis.reduce(soma,0)});
 }   
}