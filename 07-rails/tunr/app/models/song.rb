# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :text
#  album_id   :integer
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ActiveRecord::Base
  belongs_to :album
  belongs_to :artist
  has_and_belongs_to_many :mixtapes
  has_and_belongs_to_many :genres
end
