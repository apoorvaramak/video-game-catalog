class ReviewsController < ApplicationController
    skip_before_action :authorize, only: :update
    def index
        reviews = Review.all
        render json: reviews 
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        review = Review.create!(review_params)
        current_user.reviews << review
        # current_user.games << review.game
        render json: review, status: :created
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: {error: "review not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:user_id, :game_id, :content, :user_rating, :played)
    end
end
