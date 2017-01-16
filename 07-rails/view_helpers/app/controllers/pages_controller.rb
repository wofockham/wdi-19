class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 34839483998
    @phone_number = 2125551212 # US style
  end

  def text
    @numbers = (1..20).to_a
    @error_count1 = 1
    @error_count2 = 3
    @story = "A very very very long long long long long time ago in a galaxy far far far far far away"
  end

  def assets
  end

  def url
  end
end
