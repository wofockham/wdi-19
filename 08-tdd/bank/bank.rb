class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(account_name, deposit)
    @accounts[account_name] = deposit
  end
end
