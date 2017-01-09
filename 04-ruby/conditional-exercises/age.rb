# Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
print "What is your age? : "
age = gets.to_i

# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

if age < 18
  puts "You are under 18"
else
  puts "You are old enough apparently"
end
