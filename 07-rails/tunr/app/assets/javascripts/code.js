
// Home page only
$(document).ready(function () {

  if ($('body.pages.home').length === 0) {
    return;
  }

  $('h1.fun').funText();
  $('h1').css('color', 'red');

  console.log('welcome to the home page');

});

// Log in only
$(document).ready(function () {
    if ($('body.session.new').length === 0) {
      return;
    }

    console.log('welcome to the login page');
})
