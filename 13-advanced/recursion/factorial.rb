def factorial(n)
  result = 1
  while n > 1
    result = result * n
    n -= 1
  end
  result
end

require 'pry'
binding.pry
