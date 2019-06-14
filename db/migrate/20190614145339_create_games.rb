class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :winning_score
      t.integer :total_rounds
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
