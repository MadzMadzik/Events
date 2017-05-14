var list = document.getElementById('list');
var add = document.getElementById('addElem');
var liElements = document.getElementsByTagName('li');

add.addEventListener('click', function() {
  var element = document.createElement('li');
    element.innerHTML = 'item ' + liElements.length;
    list.appendChild(element);
});