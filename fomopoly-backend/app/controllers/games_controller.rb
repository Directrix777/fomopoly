class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find_by(id: params[:id])
        render json: game
    end

    def create
        game = Game.new
        game.host_name = params[:host_name]
        game.save
        render json: game
    end

    def edit
        game = game = Game.find_by(id: params[:id])
        if game
            game.host_name = params[:host_name]
            if game.save
                render json: game
            else
                render json: {message: 'There was an error with the server!'}
            end
        else
            render json: {message: 'game not found'}
        end
    end

    def destroy
        game = Game.find_by(id: params[:id])
        if game
            game.delete
            render json: {message: 'Successfully deleted!'}
        else
            render json: {message: 'game not found'}
        end
    end
end
