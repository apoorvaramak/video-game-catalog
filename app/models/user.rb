class User < ApplicationRecord
    has_many :reviews
    has_many :games, through: :reviews
    has_secure_password
    validates :username, presence: true, uniqueness: true
    # validates :age, numericality: {greater_than: 13}
end
