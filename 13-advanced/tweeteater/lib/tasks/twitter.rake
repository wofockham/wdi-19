namespace :twitter do
  desc "Removes all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populates the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populates the Tweet table with real data from Twitter"
  task :search, [:query, :count] => :environment do |t, args|
    puts "Searching Twitter for #{args[:count]} tweets mentioning #{args[:query]}"
    # YOUR CODE HERE: don't worry about Users
  end
end
