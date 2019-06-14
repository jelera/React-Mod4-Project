class Vote < ApplicationRecord
  belongs_to :player
  belongs_to :round
end
