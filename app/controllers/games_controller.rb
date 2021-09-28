class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games, include: ["reviews", "users"]
    end

    def show
        game = Game.find_by(id: params[:id])
        render json: game, include: ["reviews", "users"], status: :found
    end
end
