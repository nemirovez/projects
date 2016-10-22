function pow (){
  var x = prompt('num', '');
  var y = prompt('degree', '');
  var num = parseInt(x);
  var degree = parseInt(y);
  var r = num;
  for (var i = 1; i < degree; i++){
    r *= num;
  }
  console.log(r);
}
pow();

var arr = new Array();
for (i = 0; i < 5; i++){
  arr[i] = prompt("Введите имя" + (i + 1));
}
for (i = 0; i < arr.length; i++){
}
console.log(arr);
var name = prompt("Введите имя пользователя", "");
function find(arr, name){
for (i = 0; i < arr.length; i++)
{
if (arr[i] === name) return name;
}
}
var array = arr;
var index = find(array, name);
if (name === arr[i]){
alert ("You have successfuly logged in," + " " + index);}
else{
alert("No Such Name");}
