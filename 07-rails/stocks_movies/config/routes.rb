Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/stocks' => 'stocks#form'
  get '/stocks/quote' => 'stocks#quote'

  get '/movies' => 'movies#form'
  get '/movies/info' => 'movies#info'
end
