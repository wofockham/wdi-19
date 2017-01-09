def show_menu
  puts "Calculator"
  puts "-" * 80
  puts "[a] - Addition"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == 'q'
  case user_selection
  when 'a'
    puts "Addition coming soon"
  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using the crappy calculator."
