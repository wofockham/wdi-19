def countdown(n=10)
  while n >= 0
    puts n
    n -= 1 # Mutation
    sleep 1
  end

  puts "Blast off!"
end

def countdown_r(n=10)
  if n < 0 # Base case
    puts "Blastoff"
  else
    puts n
    sleep 1
    countdown_r  n - 1 # Recursive call and a step closer to the base case
  end
end

require 'pry'
binding.pry
