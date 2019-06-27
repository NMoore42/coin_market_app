class Api::V1::ArticlesController < ApplicationController
  before_action :find_article, only: [:destroy]

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :accepted
    else
      render json: { errors: @article.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def index
    @articles = Article.all
    render json: @articles
  end

  def destroy
    @article.destroy
    render json: @article
  end


  private

  def article_params
    params.require(:article).permit(:user_id, :title, :content)
  end

  def find_article
    @article = Article.find(params[:id])
  end

end
