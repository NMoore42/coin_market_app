class User < ApplicationRecord
  has_many :articles
  has_many :transactions
  has_many :cryptos, through: :transactions
  validates :name, :email, :password, presence: true
  validates :name, :email, uniqueness: true

end
