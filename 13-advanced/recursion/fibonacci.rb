def fibonacci(n)
  a = 1
  b = 1

  while n > 1
    a, b = b, a + b # Parallel assignment: a = b, b = a + b
    n -= 1
  end

  a # Return the nth Fibonacci number.
end

# Two ways: slow way (easy) and fast way (hard)
# Test with large numbers.
def fibonacci_r(n)
  if n <= 2
    1
  else
    fibonacci_r(n - 1) + fibonacci_r(n - 2)
  end
end

def fibonacci_r_fast(n, a=1, b=1)
  if n <= 2
    b
  else
    fibonacci_r_fast(n - 1, b, a+b)
  end
end

require 'pry'
binding.pry
