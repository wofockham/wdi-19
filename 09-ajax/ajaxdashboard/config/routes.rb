Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/brother' => 'dashboard#brother'
end
