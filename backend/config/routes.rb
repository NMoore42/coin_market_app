Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update, :destroy, :show]
      resources :transactions, only: [:create, :index]
      resources :cryptos, only: [:index]
      resources :articles, only: [:create, :index, :destroy]
      post '/login', to: 'users#login', as: 'login'
    end
  end
end
