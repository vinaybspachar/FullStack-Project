var userCount = 0;
var colorArr = ["#f3f579","#f2f65c","#f4f932","orange"];
function plusButton() {
  userCount = userCount + 1;
  document.getElementById('valuePara').innerHTML=('Count: '+userCount);
  document.body.style.backgroundColor=colorArr[userCount-1];
}

function minusButton() {
  userCount = userCount - 1;
  document.getElementById('valuePara').innerHTML=('Count: '+userCount);
  document.body.style.backgroundColor=colorArr[userCount-1];

}
