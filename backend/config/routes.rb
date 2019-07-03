Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update, :destroy, :show]
      resources :transactions, only: [:create, :index]
      resources :cryptos, only: [:index]
      resources :articles, only: [:create, :index]
      post '/articlesdelete', to: 'articles#remove', as: 'remove'
      post '/login', to: 'users#login', as: 'login'
      get '/ticker/:id', to: 'transactions#ticker', as: 'ticker'
    end
  end
end
