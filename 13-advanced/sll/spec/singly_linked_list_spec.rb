require_relative '../singly_linked_list'

describe SinglyLinkedList do
  context 'without an initial value' do
    before do
      @list = SinglyLinkedList.new
    end

    it 'should return an empty list' do
      expect(@list.head).to be_nil
    end
  end

  context 'with an initial value' do
    before do
      @list = SinglyLinkedList.new 'Groucho'
    end
  end
end
