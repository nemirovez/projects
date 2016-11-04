var parentElem = document.body;
var form = document.createElement('form');
form.setAttribute('name', 'clockform');
var p = document.createElement('p');
p.innerHTML = 'Time ';
form.appendChild(p);
var input = document.createElement('input');
input.setAttribute('name', 'clock');
input.setAttribute('value', '00:00:00:00');
// input.className = 'metrix';
input.style.width = '100px';
p.appendChild(input);
var start = document.createElement('input');
start.setAttribute('type', 'button');
start.setAttribute('value', 'Start/Pause');
p.appendChild(start);
var clear = document.createElement('input');
clear.setAttribute('type', 'button');
clear.setAttribute('value', 'Clear');
// clear.className = 'clearButton';
p.appendChild(clear);
parentElem.appendChild(form);


function reset(){
  // init = 0;
  // clearTimeout(clocktimer);
  // var meter = getElementsByClassName('clearButton');
  document.clockform.clock.value = '00:00:00:00';
}
clear.addEventListener('click', reset);

var startDate = new Date;
var init = 0;
var clocktimer;
function startTIME() {
  var thisDate = new Date();
  var t = thisDate.getTime() - startDate.getTime();
  var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
  t = Math.floor (t/1000);
  var s = t%60; t-=s;
  t = Math.floor (t/60);
  var m = t%60; t-=m;
  t = Math.floor (t/60);
  var h = t%60;
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  if (init==1) document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
init = 1;
  clocktimer = setTimeout("startTIME()",10);
 }
 // function startCalc(){
//   var newDate = new Date();
//   var t = newDate.getTime() - startDate.getTime();
//   var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
//   t = Math.floor (t/1000);
//   var s = t%60; t-=s;
//   t = Math.floor (t/60);
//   var m = t%60; t-=m;
//   t = Math.floor (t/60);
//   var h = t%60;
//   if (h<10) h = '0'+h;
//   if (m<10) m = '0'+m;
//   if (s<10) s = '0'+s;
//   if (ms<10) ms = '0'+ms;
//   if (init == 1) document.clockform.clock.value = h + ':' + m + ':' + s + ':' + ms;
//   clocktimer = setTimeout('startCalc()', 10);
// }
start.addEventListener('click', startTIME);
