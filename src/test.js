var obj = {a: 1, b: 2, c: {cc: 4}};
var nobj = {...obj};
obj.c.cc = 100;
console.log(nobj);
