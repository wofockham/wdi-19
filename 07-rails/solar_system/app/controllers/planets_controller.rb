class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def new
  end

  def create
    planet = Planet.create planet_params
    redirect_to planets_path # FIXME
  end

  def show
    @planet = Planet.find params[:id]
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy # I AM GALACTUS
    redirect_to planets_path
  end

  private
  def planet_params
    # Strong parameters: a whitelisted set of permitted attributes (to fight evil)
    params.require(:planet).permit(:name, :image, :orbit, :diameter, :mass, :moons)
  end
end
