# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#  avatar          :text
#  admin           :boolean          default("false")
#

class User < ActiveRecord::Base
  has_many :mixtapes
  has_secure_password
  validates :email, :presence => true, :uniqueness => true, :length => { :minimum => 5 }
end
