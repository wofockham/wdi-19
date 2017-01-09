# Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? : "
residence = gets.chomp.downcase

puts case residence
when 'strathfield'
  "Great"
when 'greenwich'
  "COOL OIL SPILL!"
when 'fairlight'
  "What a fancy name"
when 'cabramatta'
  "Fine dining"
else
  "I am sure that's a very nice area"
end
