class Crypto < ApplicationRecord
  has_many :transactions
  has_many :users, through: :transactions
  validates :name, :price, :ticker, presence: true

end
