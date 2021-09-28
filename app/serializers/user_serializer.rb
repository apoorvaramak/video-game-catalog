class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :password_digest, :pfp, :bio
  has_many :reviews
  has_many :games
end
