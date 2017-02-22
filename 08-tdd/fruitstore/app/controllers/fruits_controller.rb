class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # .all.reverse will also work but is slower

    respond_to do |format|
      format.html {} # This will render the default view
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
