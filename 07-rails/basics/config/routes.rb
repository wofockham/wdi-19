Rails.application.routes.draw do
  root :to => 'pages#home' # get '/' => 'pages#home'
  get '/hello' => 'pages#hello'
  get '/faq' => 'pages#faq'
  get '/lol' => 'pages#lol'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
