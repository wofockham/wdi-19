var updateBalances = function () {
  $('#checking-balance').text('$' + accounts.checkingBalance);
  $('#savings-balance').text('$' + accounts.savingsBalance);

  $('.zero').removeClass('zero');
  if (accounts.checkingBalance === 0) {
    $('#checking-balance').addClass('zero');
  }

  if (accounts.savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
  }
}

$(document).ready(function () {
  updateBalances();

  $('#checking-deposit').on('click', function () {
    var amount = $('#checking-amount').val();
    accounts.checkingDeposit(amount);
    updateBalances();
  });

  $('#checking-withdraw').on('click', function () {
    var amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    updateBalances();
  });

  $('#savings-deposit').on('click', function () {
    var amount = $('#savings-amount').val();
    accounts.savingsDeposit(amount);
    updateBalances();
  });

  $('#savings-withdraw').on('click', function () {
    var amount = $('#savings-amount').val();
    accounts.savingsWithdraw(amount);
    updateBalances();
  })
});
