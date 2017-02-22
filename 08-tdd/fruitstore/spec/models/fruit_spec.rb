require 'rails_helper'

RSpec.describe Fruit, type: :model do
  it { should belong_to(:shelf) }
  
  describe 'An apple' do
    before do
      @apple = Apple.create :name => 'Granny Smith'
    end

    it 'should have a name' do
      expect(@apple.name).to eq 'Granny Smith'
    end

    it 'should not be squishy' do
      expect(@apple.squishy?).to eq false
      expect(@apple.squishy?).to be false
    end

    it 'should remember what class it is using Single Table Inheritance (STI)' do
      fruit = Fruit.find @apple.id
      expect(fruit).to_not be_nil
      expect(fruit.class).to eq Apple
      expect(fruit).to eq @apple
      expect(fruit.is_a?(Fruit)).to be true
      expect(fruit.class.ancestors).to include(Fruit)
    end
  end

  describe 'A pear' do
    before do
      @pear = Pear.create :name => 'Nazi'
    end

    it 'should be kind of squishy' do
      expect(@pear.squishy?).to eq true
      expect(@pear.squishy?).to be true
    end

    it 'should remember what class it is using Single Table Inheritance (STI)' do
      fruit = Fruit.find @pear.id
      expect(fruit).to_not be_nil
      expect(fruit.class).to eq Pear
      expect(fruit).to eq @pear
      expect(fruit.is_a?(Fruit)).to be true
      expect(fruit.class.ancestors).to include(Fruit)
    end
  end
end
