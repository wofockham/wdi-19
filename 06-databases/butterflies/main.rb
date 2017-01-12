require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'

  erb :butterflies_index
end

# SHOW
get '/butterflies/:id' do
  # Get a specific from the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterfly = db.execute "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first # Pluck the sole butterfly from the array

  # Show some HTML
  erb :butterflies_show
end
