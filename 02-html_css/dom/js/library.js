var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

var list = document.createElement('ul'); // Detached DOM node.

for (var i = 0; i < books.length; i++) {
  var book = books[i];

  var item = document.createElement('li'); // Detached DOM node.
  item.innerHTML = book.title + ' ' + book.author;

  if (book.alreadyRead) {
    item.style.opacity = 0.5;
  }

  list.appendChild( item );
}

document.body.appendChild( list );
