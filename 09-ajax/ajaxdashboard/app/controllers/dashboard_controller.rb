class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    render :text => brother
  end
end
