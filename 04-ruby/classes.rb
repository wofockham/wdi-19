require 'pry'

class MarxBrother
  attr_accessor :name, :instrument, :vice # Macro to define def name() and def name=()

  def initialize(name='', instrument='', vice=nil)
    @name = name
    @instrument = instrument
    @vice = vice
  end

  def bio
    "My name is #{ @name } and I play the #{ @instrument }. I enjoy #{ @vice }."
  end
end

class Playwright
  attr_accessor :name, :occupation, :residence

  def bio
    "My name is #{ @name } and I am a #{ @occupation }. I live in #{ @residence }."
  end
end

# bio groucho
# groucho.bio


binding.pry
