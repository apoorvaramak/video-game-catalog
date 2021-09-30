class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: ["Not authorized"]}, status: :unauthorized
        end 
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end

    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :age, :pfp, :bio, :showBirthday)
    end
end
