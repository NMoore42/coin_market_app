class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:update, :destroy, :show]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def login
    email = params[:email]
    @user = User.all.find_by(email: email)
    if @user
      @coins = {bitcoin: 32, litecoin: 11}
      @articles = {}
      render json: {user: @user, coins: @coins}
    else
      @errors = ["Invalid credentials, please try again"]
      render json: @errors
    end
  end

  def show
    render json: @user
  end

  def destroy
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end



  def find_user
    @user = User.find(params[:id])
  end

end
