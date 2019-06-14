class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :winning_score
      t.integer :total_rounds
      t.references :winner, polymorphic: true, index: true

      t.timestamps
    end
  end
end
