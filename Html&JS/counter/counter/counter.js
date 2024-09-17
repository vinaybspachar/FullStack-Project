var userCount = 0;

function plusButton() {
  userCount = userCount + 1;
  document.getElementById('valuePara').innerHTML=('Count: '+userCount);
}

function minusButton() {
  userCount = userCount - 1;
  document.getElementById('valuePara').innerHTML=('Count: '+userCount);
}
