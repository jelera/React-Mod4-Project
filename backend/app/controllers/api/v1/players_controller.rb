class Api::V1::PlayersController < ApplicationController
  before_action :find_player, only: [:show]

   def index
     @player = Player.all
     render json: @player
   end

   def show
     @player = Player.find(params[:id])
     render json: @player
   end

   def create
     @player = Player.new(player_params)
     if @player.save
       render json: @player
     end
   end

   private

   def player_params
     params.require(:player).permit(:name)
   end

   def find_player
     @player = Player.find(params[:id])
   end

end
