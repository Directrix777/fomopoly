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

    def transact
        owner = User.find_by(params[:owner_id])
        guest = User.find_by(params[:guest_id])
        amount = params[:amount]
        if owner && guest
            if amount.class == Integer
                guest.cash = guest.cash - amount
                owner.cash = owner.cash + amount
                if guest.save && owner.save
                    render json: {message: `Successfully transferred $#{amount} from #{guest.name} to #{owner.name}`}
                else
                    render json: {message: 'There was an error with the server!'}
                end
            else
                render json: {message: 'amount must be of type Integer'}
            end
        else
            render json: {message: 'User not found'}
        end
    end
end
