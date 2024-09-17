var correctName = 'John Harper';
var correctPassword = 'john1234';
var currentBalance = 500;

function withdraw(){
  var nameAttempt=document.getElementById('nameForm').value;
  var passwordAttempt=document.getElementById('passForm').value;
  var amountAttempt=document.getElementById('amountForm').value;
  var newBalance=currentBalance-amountAttempt;
  if (nameAttempt != correctName) {
    document.getElementById('feedback').innerHTML='Incorrect name. Try again!'
  } else if (passwordAttempt != correctPassword) {
    document.getElementById('feedback').innerHTML='Incorrect password. Try again!'
  } else if (amountAttempt > currentBalance) {
    document.getElementById('feedback').innerHTML='Insufficient funds'
  } else {
    document.getElementById('feedback').innerHTML='Withdrawal success! Your funds are now: '+ newBalance;

  }
}
