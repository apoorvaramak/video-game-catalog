class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_rating, :played
  has_one :user
  has_one :game
end
