class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.references :player, foreign_key: true
      t.references :round, foreign_key: true
      t.string :player_guess
      t.boolean :is_correct

      t.timestamps
    end
  end
end
