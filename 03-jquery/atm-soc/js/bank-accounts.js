var accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function () {
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += parseInt(amount);
  },
  checkingWithdraw: function (amount) {
    amount = parseInt(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if ( amount <= this.total() ) {
      var remaining = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= remaining;
    }
  },

  savingsDeposit: function (amount) {
    this.savingsBalance += parseInt(amount);
  },
  savingsWithdraw: function (amount) {
    amount = parseInt(amount);
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if ( amount <= this.total() ) {
      var remaining = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= remaining;
    }
  }

}
