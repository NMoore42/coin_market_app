class Api::V1::CryptosController < ApplicationController

  def create
    @crypto = Crypto.new(crypto_params)
    if @crypto.save
      render json: @crypto, status: :accepted
    else
      render json: { errors: @crypto.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def index
    @cryptos = Crypto.all
    render json: @cryptos
  end


  private

  def crypto_params
    params.require(:crypto).permit(:name, :price, :ticker)
  end

end
