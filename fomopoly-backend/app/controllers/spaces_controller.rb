class SpacesController < ApplicationController
    def index
        spaces = Space.all
        render json: spaces
    end

    def show
        space = Space.find_by(id: params[:id])
        render json: space
    end
end
