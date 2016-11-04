var app = {
  createElement: function(tag, value, className){
    var elem = document.createElement(tag);
    elem.innerHTML = value;
    elem.className = className || "";
    return elem;
  }
};
// Heading
var parentElem = document.body;
var newDiv = app.createElement('div', 'Тест по программированию', 'newdiv');
parentElem.appendChild(newDiv);


// Questions
var b = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];
// Answers
var a = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

function question (b){
  // Questions
  for (var q=0; q<3; q++){
    var newLi = app.createElement('p', b[q], 'newLi');
  newDiv.appendChild(newLi);

function checkbox (a){
  // Answers
  for (var i=0; i<3; i++){
  var p = app.createElement('p', '', 'checkbox checkbox-info');
  newLi.appendChild(p);
  var labl = app.createElement('label', a[i], 'labl');
  p.appendChild(labl);
  var cb = app.createElement("input", '', 'styled');
    cb.setAttribute('type', 'checkbox');
  p.insertBefore(cb, labl);
}
}

checkbox(a);
}
}
question(b);

// Submit form
var submit = app.createElement('input', '', 'submit');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
newDiv.appendChild(submit);
