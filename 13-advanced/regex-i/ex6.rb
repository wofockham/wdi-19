# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  # puts line if line =~ /(fred.*wilma|wilma.*fred)/ # .* is the "any old junk" matcher
  puts line if line =~ /fred/ && line =~ /wilma/
end
