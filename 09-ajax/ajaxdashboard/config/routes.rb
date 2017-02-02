Rails.application.routes.draw do
  root :to => 'pages#index'

  get '/info' => 'dashboard#info'

  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'
end
