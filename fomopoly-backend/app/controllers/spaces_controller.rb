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
            space.user_id = params[:space][:user_id]
            if space.save
                render json: space
            end
        end
    end

    def dissociate
        spaces = Space.all
        num = 0
        spaces.each do |space|
            if space.user_id == params[:user_id]
                space.user_id = nil
                space.houses = 0
                space.save
                num += 1
            end
        end
        render json: {message: "Spaces dissociated!", num: num}
    end
end
