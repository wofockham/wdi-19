class SinglyLinkedList
  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def prepend(value) # AKA .unshift
    node = Node.new(value)
    node.next = @head
    @head = node
  end

  def append(value) # AKA .push
    last.next = Node.new(value)
  end

  def last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def insert_after(node, new_node)
  end

  def remove # AKA shift
  end

  def length # AKA size, count
  end

  def find(needle)
    # Returns the node with value of needle OR nil
  end

  def reverse
  end

  def reverse!
  end

  # Tricky
  def each # Takes a block
  end

  # Also: .map, .inject, etc

  Node = Struct.new(:value, :next)
  # equivalent to:
  # class Node
  #   attr_accessor :value, :next
  #
  #   def initialize(value=nil)
  #     @value = value
  #     @next = nil
  #   end
  # end
end

bros = SinglyLinkedList.new 'Chico'
bros.prepend 'Harpo'
bros.prepend 'Groucho'

# require 'pry'
# binding.pry
