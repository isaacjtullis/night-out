class HomesController < ApplicationController
  def index
=begin
    DARK_SKY_API_KEY = "e8fa7d91119176e03264be9d46250122"

    get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
      uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
      return Net::HTTP.get(uri)
    end
=end
  end
end
