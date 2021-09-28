# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'rest-client'

Review.destroy_all
Game.destroy_all
User.destroy_all

puts("seeding")

def key
    ENV["API_KEY"]
end

def games_data
    api_data = {key: key}
    games = RestClient.get("https://api.rawg.io/api/games?key=#{key}")

    games_array = JSON.parse(games)["results"]

    games_array.each do |game|
        platforms = ""
        game["platforms"].each do |platform|
            platforms += platform["platform"]["name"] + ", "
        end
        Game.create(name: game["name"], released: game["released"], background_img: game["background_image"], rating: game["rating"]/game["rating_top"], platforms: platforms)
    end
end

puts('creating users...')

user1 = User.create(name: "apoorva", age: "07-29-2000", username: "apoorba", password: "mooth")
user2 = User.create(name: "josh", age: "03-24-1994", username: "josha", password: "password")

puts ('creating games...')
games_data()

puts('creating reviews...')
review1 = Review.create(content: "it was ok", user_rating: 0, user_id: 2, game_id: 1, played: true)
review2 = Review.create(content: "epic gmae", user_rating: 1, user_id: 1, game_id: 1, played: true)
review3 = Review.create(content: "bad", user_rating: 0, user_id: 1, game_id: 2, played: true)

puts("done seeding :)")
