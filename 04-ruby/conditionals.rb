# if 13 > 10
#   puts "Yup, 13 is greater than 10"
# end

puts "Yup, 13 is greater than 10" if 13 > 10 # If modifier form

if 10 > 13
  puts "Something is going on"
else
  puts "Everything is fine"
end

grade = 'A'

# if grade == 'A'
#   puts "You are a genius"
# elsif grade == 'B'
#   puts "You are coasting fine"
# elsif grade == 'C'
#   puts "Acceptable"
# elsif grade == 'D'
#   puts "Academic probation"
# else
#   puts "You done goofed"
# end

puts case grade
when 'A'
  "You are a genius"
when 'B'
  "You are coasting fine"
when 'C'
  "Acceptable"
when 'D'
  "Academic probation"
else
  "You done goofed"
end


password = 'strawberry'

# if password != 'swordfish'
#   puts "Wrong password"
#   exit
# end

unless password == 'swordfish'
  puts "Wrong password"
  exit
end

puts "Wrong password" unless password == 'swordfish'
puts "Wrong password" if password != 'swordfish'
