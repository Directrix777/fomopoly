Rails.application.routes.draw do
  resources :games
  resources :users
  patch '/users/transact', to: 'users#transact'
  resources :spaces
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
