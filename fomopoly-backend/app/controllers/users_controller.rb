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
        user.token = params[:token]
        user.game_id = params[:game_id]
        user.cash = 1500
        user.current_location = 40
        user.in_jail = false
        user.save
        render json: user
    end

    def update
        @@lock.synchronize do
            user = user = User.find_by(id: params[:id])
            if user
                user.name = params[:name]
                user.token = params[:token]
                user.game_id = params[:game_id]
                user.cash = params[:cash]
                user.current_location = params[:current_location]
                user.in_jail = params[:in_jail]
                if user.save
                    render json: user
                else
                    render json: {message: 'There was an error with the server!'}
                end
            else
                render json: {message: 'User not found'}
            end
        end
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
