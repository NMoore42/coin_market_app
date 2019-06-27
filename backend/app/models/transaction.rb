class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :crypto
  validates :crypto_id, :user_id, :quantity, presence: true

end
