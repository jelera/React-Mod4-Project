class CreatePlayerGame < ActiveRecord::Migration[5.2]
  def change
    create_table :player_games do |t|
      t.references :player, foreign_key: true
      t.references :game, foreign_key: true
    end
  end
end
