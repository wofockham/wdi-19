require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new 'TDD Bank' } # bank = Bank.new 'TDD Bank'

  describe '.new' do # Bank.new
    it "creates a new bank object" do
      expect(bank).to_not eq nil
    end

    it 'assigns the bank a name' do
      expect(bank.name).to eq "TDD Bank"
    end

    it 'starts with no accounts' do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe '#create_account' do # bank.create_account
    it 'creates an account for some jerk with some starting deposit' do
      bank.create_account 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200
    end
  end

  describe '#deposit' do
    it 'deposits an amount from a customer into their account' do
      bank.create_account 'Craigsy', 200
      bank.deposit 'Craigsy', 300
      expect(bank.accounts['Craigsy']).to eq 500
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a customer\'s account' do
      bank.create_account 'Shazza', 200
      bank.withdraw 'Shazza', 50
      expect(bank.accounts['Shazza']).to eq 150
    end

    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Chanel', 1
      bank.withdraw 'Chanel', 5_000_000_000
      expect(bank.balance('Chanel')).to eq 1
    end

    it 'is not an effective method of contraception' do
      # This test is left as an exercise to the reader
    end
  end

  describe '#balance' do
    it 'returns the current balance for a given account' do
      bank.create_account 'Mad Robby', 1_000
      expect(bank.balance('Mad Robby')).to eq 1_000
    end
  end

end
