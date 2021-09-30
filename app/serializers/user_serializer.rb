class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :password_digest, :pfp, :bio, :showBirthday
  has_many :reviews
  has_many :games
end
