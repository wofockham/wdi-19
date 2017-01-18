User.destroy_all
u1 = User.create :email => 'craigsy@ga.co'
u2 = User.create :email => 'jonesy@ga.co'

Song.destroy_all
s1 = Song.create :name => 'Have A Safe Trip Dear'
s2 = Song.create :name => 'All By Electricity'
s3 = Song.create :name => 'Marianas Trench'

Album.destroy_all
a1 = Album.create :name => 'Engine Takes To The Water'
a2 = Album.create :name => 'From The Vapor of Gasoline'
a3 = Album.create :name => 'The Shipping News'

Artist.destroy_all
r1 = Artist.create :name => 'June of 44'
r2 = Artist.create :name => 'The Mercury Program'
r3 = Artist.create :name => 'The Shipping News'

Genre.destroy_all
g1 = Genre.create :name => 'Math rock'
g2 = Genre.create :name => 'Boat rock'
g3 = Genre.create :name => 'Text rock'

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Make Out Music'
m2 = Mixtape.create :title => 'Code Jams'
m3 = Mixtape.create :title => 'House cleaning music'

# Associations
a1.songs << s1
a2.songs << s3
a3.songs << s2

r1.songs << s1
r2.songs << s3
r3.songs << s2

s1.genres << g1 << g2 << g3
s2.genres << g1 << g2 << g3
s3.genres << g1

m1.songs << s1 << s2 << s3 << s1
m2.songs << s3 << s3 << s3
m3.songs << s2 << s1

u1.mixtapes << m1 << m2
u2.mixtapes << m3
