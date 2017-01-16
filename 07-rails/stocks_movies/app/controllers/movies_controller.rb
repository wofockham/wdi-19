class MoviesController < ApplicationController
  def form
  end

  def info
    title = params[:title]
    url = "http://omdbapi.com/?t=#{title}"
    @movie_info = HTTParty.get url
  end
end
