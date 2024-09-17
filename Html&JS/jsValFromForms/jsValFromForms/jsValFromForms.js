  var correctName = 'johnUser';
var correctPassword = 'john123';

function returnInfo() {
  var nameVar = document.getElementById('nameForm').value;
  var namePass = document.getElementById('passForm').value;

  if (nameVar == correctName && namePass == correctPassword) {
    document.body.style.backgroundColor='yellow';
    alert('Access granted!!! Welcome');
  } else {
    document.body.style.backgroundColor='grey';
    alert('Access DENIED!!!');
  }
}

function calculate() {
  var one = document.getElementById('numOne').value;
  var two = document.getElementById('numTwo').value;
  var three = one*two;
  alert('Your result is: '+three);
}
