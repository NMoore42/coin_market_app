
class User < ApplicationRecord
  has_many :articles
  has_many :transactions
  has_many :cryptos, through: :transactions
  validates :name, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validate :check_password_format

  def self.get_article(user_id, url)
    user = User.find(user_id)
    user.articles.find{|article| article.url == url}
  end

  def check_password_format
    regexps = {" must contain at least one lowercase letter" => /[a-z]+/,
               " must contain at least one uppercase letter" => /[A-Z]+/,
               " must contain at least one digit" => /\d+/,
               " must contain at least one special character" => /[^A-Za-z0-9]+/}
    regexps.each do |rule, reg|
      errors.add(:password, rule) unless password.match(reg)
    end
  end

end
