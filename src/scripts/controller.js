
var container = document.querySelector('.container');

for(var i = 0; i < myName.length; i++) {

  var newElem = document.createElement('p');
  newElem.innerHTML = '<b>' + myName[i] + '</b>' + ' and I learn on ' + coursesList[0].provider;
  container.appendChild(newElem);

}
