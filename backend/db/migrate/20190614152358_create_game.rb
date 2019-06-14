class CreateGame < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :winning_score
      t.integer :total_rounds
      t.integer :winner_id
      t.text :game_data
    end
    # add_index :games, [:winner_id]
  end
end
