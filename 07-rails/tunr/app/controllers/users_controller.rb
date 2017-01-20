class UsersController < ApplicationController
  before_action :check_if_logged_in, :only => [:edit, :update]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save # Checking for validity
      session[:user_id] = @user.id # Signing up also signs you in.
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @user = @current_user
  end

  def update
    user = @current_user
    user.update user_params
    redirect_to root_path # This would probably redirect to users#show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :avatar)
  end
end
