var checkForZero = function () {
  $('.zero').removeClass('zero');

  var checkingBalance = $('#checking-balance').text();
  checkingBalance = parseInt( checkingBalance.slice(1) );

  if (checkingBalance === 0) {
    $('#checking-balance').addClass('zero');
  }

  var savingsBalance = $('#savings-balance').text();
  savingsBalance = parseInt( savingsBalance.slice(1) );

  if (savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
  }
}

$(document).ready(function () {

  $('#checking-deposit').on('click', function () {
    var amount = $('#checking-amount').val();
    amount = parseInt(amount);

    var balance = $('#checking-balance').text();
    balance = parseInt( balance.slice(1) ); // Convert to int and remove the $.

    balance += amount;

    $('#checking-balance').text('$' + balance);
    checkForZero();
  });


  $('#checking-withdraw').on('click', function () {
    var amount = $('#checking-amount').val();
    amount = parseInt(amount);

    var balance = $('#checking-balance').text();
    balance = parseInt( balance.slice(1) ); // Convert to int and remove the $.

    var otherBalance = $('#savings-balance').text();
    otherBalance = parseInt( otherBalance.slice(1) );

    if (amount <= balance) {
      balance -= amount;
    } else if (amount <= (balance + otherBalance)) {
      var remaining = amount - balance;
      balance = 0;
      otherBalance -= remaining;
    }

    $('#checking-balance').text('$' + balance);
    $('#savings-balance').text('$' + otherBalance);

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    var amount = $('#savings-amount').val();
    amount = parseInt(amount);

    var balance = $('#savings-balance').text();
    balance = parseInt( balance.slice(1) ); // Convert to int and remove the $.

    balance += amount;

    $('#savings-balance').text('$' + balance);
    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    var amount = $('#savings-amount').val();
    amount = parseInt(amount);

    var balance = $('#savings-balance').text();
    balance = parseInt( balance.slice(1) ); // Convert to int and remove the $.

    var otherBalance = $('#checking-balance').text();
    otherBalance = parseInt( otherBalance.slice(1) );

    if (amount <= balance) {
      balance -= amount;
    } else if (amount <= (balance + otherBalance)) {
      var remaining = amount - balance;
      balance = 0;
      otherBalance -= remaining;
    }

    $('#savings-balance').text('$' + balance);
    $('#checking-balance').text('$' + otherBalance);

    checkForZero();
  });
});
