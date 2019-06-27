class Article < ApplicationRecord
  belongs_to :user
  validates :title, :user_id, :content, presence: true
  validates :content, uniqueness: true

end
