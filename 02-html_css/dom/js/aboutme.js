var body = document.body;
body.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade 420';

var favorites = document.getElementById('favorites');
favorites.innerHTML = 'Nothing, I have no favorites';

document.getElementById('hometown').innerHTML = 'Sydney';

var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listitem';
}

var bill = document.createElement('img'); // Detached DOM node.
bill.src = 'http://fillmurray.com/250/250';
body.appendChild( bill );
