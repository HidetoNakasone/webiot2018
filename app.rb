
require 'sinatra'
require 'sinatra/reloader'
# require "json"

# require "mysql2"
# require "mysql2-cs-bind"


# json_path = File.dirname(__FILE__) + '/data/data.json'

# enable :sessions


before do
  headers 'Access-Control-Allow-Origin' => '*'
  headers 'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept'
end


# ======================

# client = Mysql2::Client.new(
#   :host => "",
#   :username => "",
#   :password => "",
#   :database => "",
#   :port => ""
# )

# ======================

get '/' do
  # erb :index
  erb :index_dev
end


get '/view' do
  erb :view
end
