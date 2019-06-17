require_relative '../../../../lib/api_communicator.rb'

class Api::V1::GamesController < ApplicationController

  before_action :find_game, only: [:show]

  def index
    @game = Game.all
    render json: @game
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    @game = Game.new(game_params)
    @game.game_data = game_api_call
    if @game.save
      render json: @game
    end
  end

  private

  def game_params
    params.require(:game).permit(:winning_score, :total_rounds, :winner_id)
  end

  def game_api_call
    APICall.get_data
  end

  def find_game
    @game = Game.find(params[:id])
  end

end
