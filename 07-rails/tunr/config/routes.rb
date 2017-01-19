Rails.application.routes.draw do
  get 'session/new'

  root :to => 'pages#home'
  resources :users, :only => [:new, :create]

  get '/login' => 'session#new'
  post '/login' => 'session#create'

end
