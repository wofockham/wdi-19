class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    render :text => brother
  end

  def time
    render :text => Time.now
  end

  def uptime
    render :text => '<em>' + `uptime` + '</em>'
  end
end
