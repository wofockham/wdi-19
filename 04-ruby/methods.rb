# Basics #######################################################################

# var sayHello = function () {
#   console.log('Hello World');
# };
#
# sayHello();

# def say_hello
#   puts 'Hello World'
# end
#
# say_hello


# Arguments / Parameters #######################################################

# var sayHello = function (friend) {
#   console.log('Hello ' + friend + '!');
# };
#
# sayHello('Craigsy');
# sayHello('Jonesy');
#
# // Arguments are technically optional in JS
# sayHello();

# def say_hello(friend)
#   puts "Hello #{ friend }!"
# end
#
# say_hello("Craigsy")
# say_hello "Jonesy" # Preferred
#
# say_hello


# Return Values ################################################################

# var add = function (num1, num2) {
#   return num1 + num2;
# };
#
# var result = add(2, 3);
# console.log( result );

# def add(num1, num2)
#   num1 + num2 # Implicit return
# end
#
# result = add 2, 3
# puts result


# Default Parameters ###########################################################

# var sayHello = function (friend) {
#   // Guard code to set a default if required
#   if (undefined === friend) {
#     friend = 'World'; // Default
#   }
#   console.log('Hello ' + friend + '!');
# }
#
# sayHello('Craigsy');
# sayHello();

# Variadic functions in Ruby are easy
def say_hello(friend="World") # Default parameter
  puts "Hello #{ friend }!"
end

say_hello 'Pope Joan'
say_hello
# say_hello "Ringo", "Paul" # This will throw an error: too many arguments
