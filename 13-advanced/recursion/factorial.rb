def factorial(n)
  result = 1
  while n > 1
    result = result * n
    n -= 1
  end
  result
end

def factorial_r(n)
  if n > 1
    n * factorial_r(n - 1) # Recursive call and the step n - 1
  else
    1 # Base case
  end
end

require 'pry'
binding.pry
