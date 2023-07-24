var arrlength=parseInt(prompt("Enter the length of array"));
var a=[];
for(let i=0;i<arrlength;i++){
	a[i]=parseInt(prompt("Enter the"+(i+1)+"value"));
}
document.write("a="+a+"<br>"+"<br>");
var arrlength=parseInt(prompt("Enter the length of array"));
var b=[];
for(let i=0;i<arrlength;i++){
	b[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("b="+b+"<br>"+"<br>");
a.push(b);
document.write("combin two array is"+a);
console.log(a);