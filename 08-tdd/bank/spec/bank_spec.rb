require_relative '../bank'

describe Bank do

  describe '.new' do # Bank.new
    it "creates a new bank object" do
      bank = Bank.new "TDD Bank"
      expect(bank).to_not eq nil
    end

    it 'assigns the bank a name' do
      bank = Bank.new "TDD Bank"
      expect(bank.name).to eq "TDD Bank"
    end

    it 'starts with no accounts' do
      bank = Bank.new "TDD Bank"
      expect(bank.accounts.count).to eq 0
    end
  end

  describe '#create_account' do # bank.create_account
    it 'creates an account for some jerk with some starting deposit' do
      bank = Bank.new "TDD Bank"
      bank.create_account 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200
    end
  end
end
