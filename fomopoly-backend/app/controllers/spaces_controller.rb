class SpacesController < ApplicationController
    def index
        spaces = Space.all
        render json: spaces
    end

    def show
        space = Space.find_by(id: params[:id])
        render json: space
    end

    def update
        @@lock.synchronize do
            space = Space.find_by(id: params[:id])
            space.user_id = params[:user_id]
            render json: space
        end
    end
end
