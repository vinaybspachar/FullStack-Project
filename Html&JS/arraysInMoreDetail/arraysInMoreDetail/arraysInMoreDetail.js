function show(){
  var myArray = ["England","Spain",["one","two","three"],"France","Germany",3,4,56];
  var arrValue = myArray.push("Last item");
  document.getElementById('show').innerHTML=myArray;
}
