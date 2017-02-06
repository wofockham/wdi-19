Rails.application.routes.draw do
  root :to => 'secrets#home'
  resources :secrets
end
