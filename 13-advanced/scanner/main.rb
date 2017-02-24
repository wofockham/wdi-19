require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following command in another terminal:"
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
  scanlog = File.open 'scan.gnmap'

  @hosts = []

  scanlog.each do |line|
    next if line =~ /^#/

    m = line.match /Host: ([0-9.]+)\b/
    @hosts << m[1]
  end

  @hosts.uniq!

  erb :home
end
