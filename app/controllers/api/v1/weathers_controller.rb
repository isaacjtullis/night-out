class Api::V1::WeathersController < ApplicationController
  def index
    render json: Camper.all
  end
end
