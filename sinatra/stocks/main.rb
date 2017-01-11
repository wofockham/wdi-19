require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :form
end

get '/lookup' do
  @stock_symbol = params['symbol'].upcase

  stock_data = YahooFinance::get_quotes YahooFinance::StandardQuote, @stock_symbol
  @price = stock_data[@stock_symbol].lastTrade

  erb :lookup
end
