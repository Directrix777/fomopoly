class User < ApplicationRecord
    has_many :spaces
    belongs_to :game
end
