class DashboardController < ApplicationController
  def info
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    uptime = `uptime`
    time = Time.now

    render :json => {
      :time => time,
      :uptime => uptime,
      :brother => brother
    }
  end

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
