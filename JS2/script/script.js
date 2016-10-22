// Heading
var parentElem = document.body;
var newDiv = document.createElement('div');
  newDiv.innerHTML = 'Тест по программированию';
  newDiv.style.textAlign = 'center';
  newDiv.style.fontFamily = 'sans-serif';
  newDiv.style.fontSize = '18px';
parentElem.appendChild(newDiv);

// Questions
var b = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];

// Answers
var a = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

function question (b){
  // Questions
  for (q=0; q<3; q++){
  var newLi = document.createElement('p');
    newLi.innerHTML = b[q];
    newLi.style.textAlign = 'left';
    newLi.style.marginLeft = '300px';
  newDiv.appendChild(newLi);

function checkbox (a){
  // Answers
  for (i=0; i<3; i++){

  var p = document.createElement('p');
    p.style.margin = '0';
    p.className = 'checkbox checkbox-info';
  newLi.appendChild(p);
  var labl = document.createElement('label');
    labl.innerHTML = a[i];
    labl.style.fontSize = '15px';
  p.appendChild(labl);
  var cb = document.createElement("input");
    cb.setAttribute('type', 'checkbox');
    cb.className = 'styled';
  p.insertBefore(cb, labl);
}
}

checkbox(a);
}
}
question(b);

// Submit form
var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
submit.style.border = '2px solid black';
submit.style.backgroundColor = '#CEECF5';
submit.style.fontSize = '17px';
submit.style.padding = '15px';
newDiv.appendChild(submit);
