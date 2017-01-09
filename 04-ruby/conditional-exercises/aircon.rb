# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
print "What is the current temperature? : "
current_temp = gets.to_i

print "Is the A/C functional? (y/n): "
functional_ac = gets.chomp.downcase

print "What is the desired temperature? : "
desired_temp = gets.to_i

if functional_ac == 'y'
  puts "Turn on the A/C please" if current_temp > desired_temp
else
  if current_temp > desired_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end
