class UserMailer < ApplicationMailer
  default :from => 'jturnbull@ga.co'

  def welcome(user)
    @user = user
    mail :to => @user.email, :subject => 'Welcome to Email World', :cc => 'jturnbull@ga.co'
  end
end
