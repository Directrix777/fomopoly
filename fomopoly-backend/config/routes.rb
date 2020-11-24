Rails.application.routes.draw do
  resources :users
  patch '/users/transact', to: 'users#transact'
  patch '/users/pay-bank', to: 'users#pay_bank'
  resources :spaces
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
