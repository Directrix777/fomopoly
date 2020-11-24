class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        user = User.new
        user.name = params[:name]
        user.game_id = params[:game_id]
        user.cash = 1500
        user.current_location = 40
        user.save
        render json: user
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.delete
            render json: {message: 'Successfully deleted!'}
        else
            render json: {message: 'User not found'}
        end
    end
end
