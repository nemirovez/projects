function pow (){
  var x = prompt('num', '');
  var y = prompt('degree', '');
  var num = parseInt(x);
  var degree = parseInt(y);
  for (var i = 1; i < degree; i++){
    num *= num;
  }
  console.log(r);
}
pow();

var arr = [];
for (i = 0; i < 5; i++){
  arr[i] = prompt("Введите имя" + (i + 1));
}
console.log(arr);
var name = prompt("Введите имя пользователя", "");
function find(arr, name){
for (var i = 0; i < arr.length; i++)
{
if (arr[i] === name) return name;
}
}
var index = find(arr, name);
if (name === arr[i]){
alert ("You have successfuly logged in," + " " + index);}
else{
alert("No Such Name");}
//
