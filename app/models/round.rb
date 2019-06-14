class Round < ApplicationRecord
  has_many :votes
  belongs_to :game
end
