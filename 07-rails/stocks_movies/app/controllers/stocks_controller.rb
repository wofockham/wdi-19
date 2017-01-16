class StocksController < ApplicationController
  def form
  end

  def quote
    @symbol = params[:symbol].upcase
    stock_info = YahooFinance::get_quotes YahooFinance::StandardQuote, @symbol
    @quote = stock_info[@symbol].lastTrade
  end
end
