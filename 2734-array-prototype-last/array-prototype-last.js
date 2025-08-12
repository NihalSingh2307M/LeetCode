Array.prototype.last = function() {
    return this.length ? this[this.length -1] :-1;
    
};

let num =[null,{},3];
console.log(num.last());

let num2=[];
console.log(num2.last());
