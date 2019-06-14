class Game < ApplicationRecord
  has_many :rounds
  has_many :player_games
  has_many :players, through: :player_games
  belongs_to :winner, polymorphic: true
end
