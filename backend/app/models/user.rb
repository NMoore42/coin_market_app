class User < ApplicationRecord
  has_many :articles
  has_many :transactions
  has_many :cryptos, through: :transactions
end
