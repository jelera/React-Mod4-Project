class CreateRound < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.references :game, foreign_key: true
      t.string :question
      t.string :right_answer
      t.string :wrong_answers
    end
  end
end
