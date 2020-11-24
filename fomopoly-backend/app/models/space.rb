class Space < ApplicationRecord
    def index
        spaces = Space.all
        render json: users
    end
end
