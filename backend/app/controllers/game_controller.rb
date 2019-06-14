class GameController < ApplicationController

def index 
  @games = Game.all 
end 

def show 

end


private 
def game_params 
  params.require(:game).permit( 
    
  )
end

end
