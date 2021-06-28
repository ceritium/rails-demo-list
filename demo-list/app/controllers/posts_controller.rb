class PostsController < ApplicationController
  def index
    @q = Post.ransack(params[:q])
    @posts = @q.result.page(params[:page])
  end
end
