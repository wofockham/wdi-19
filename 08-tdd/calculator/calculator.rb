class Calculator
  def initialize
    @input = []
  end

  def <<(n)
    @input.push n.to_f
  end

  def add
    # @input.inject { |acc, n| acc + n }
    @input.inject(&:+)
  end

  def subtract
    @input.inject(&:-)
  end
end
