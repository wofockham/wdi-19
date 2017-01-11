require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
  "Hello world"
end

get '/' do
  "Hello World from the home page"
end

get '/name/:first_name' do
  "Hello #{ params[:first_name] }"
end

get '/name/:first_name/:surname' do
  "Good day #{ params[:first_name] } #{ params[:surname].upcase }"
end

get '/name/:first_name/:surname/:age' do
  "Your name is #{ params[:first_name] } #{ params[:surname].upcase } and you are #{ params[:age] } years old."
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end
