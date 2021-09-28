class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :released, :background_img, :rating, :platforms
  has_many :reviews
  has_many :users
end
