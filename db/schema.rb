# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_14_152532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "winning_score"
    t.integer "total_rounds"
    t.integer "winner_id"
  end

  create_table "player_games", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "game_id"
    t.index ["game_id"], name: "index_player_games_on_game_id"
    t.index ["player_id"], name: "index_player_games_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
  end

  create_table "rounds", force: :cascade do |t|
    t.bigint "game_id"
    t.string "question"
    t.string "right_answer"
    t.string "wrong_answers"
    t.index ["game_id"], name: "index_rounds_on_game_id"
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "round_id"
    t.string "guessed_answer"
    t.boolean "is_correct"
    t.index ["player_id"], name: "index_votes_on_player_id"
    t.index ["round_id"], name: "index_votes_on_round_id"
  end

  add_foreign_key "player_games", "games"
  add_foreign_key "player_games", "players"
  add_foreign_key "rounds", "games"
  add_foreign_key "votes", "players"
  add_foreign_key "votes", "rounds"
end
