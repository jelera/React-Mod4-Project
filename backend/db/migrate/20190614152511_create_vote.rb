class CreateVote < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.references :player, foreign_key: true
      t.references :round, foreign_key: true
      t.string :guessed_answer
      t.boolean :is_correct
    end
  end
end
