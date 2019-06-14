class Player < ApplicationRecord
  has_many :games, as: :winner, foreign_key: "winner_id"
  has_many :player_games
  has_many :votes
  has_many :games, through: :player_games
  has_many :rounds, through: :games
end
