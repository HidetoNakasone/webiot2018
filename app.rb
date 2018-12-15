
require 'sinatra'
require 'sinatra/reloader'
require "json"

# require "mysql2"
# require "mysql2-cs-bind"


json_path = File.dirname(__FILE__) + '/data/data.json'

enable :sessions

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
  erb :index
end

get '/set_msg/:msg' do
  p params

  datum = {
    "id" => 0,
    "msg" => params[:msg]
  }
  data = []
  open(json_path) do |io|
    data = JSON.load(io)
  end
  data << datum
  open(json_path, 'w') do |io|
    JSON.dump(data, io)
  end

end

get '/view' do
  erb :view
end

get '/get_msg' do
  content_type :json
  # data = {hoge: session[:temp_msg]}

  data = []
  open(json_path) do |io|
    data = JSON.load(io)
  end

  p data

  data = {hoge: "適当な文章"}

  data.to_json
end

get '/test' do
  client.xquery("SHOW database;");
end
