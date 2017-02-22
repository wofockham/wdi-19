require 'rails_helper'

RSpec.describe FruitsController, type: :controller do
  describe 'GET to index' do
    before do
      # TODO: Use FactoryGirl here
      3.times { |i| Fruit.create :name => "Fruit number #{ i }"}
    end

    describe 'as HTML' do
      before do
        get :index
      end

      it 'should respond with a status 200' do
        expect(response).to be_success
        expect(response.status).to eq 200
      end

      it 'should give us the fruits in an instance variable in reverse order' do
        # assigns(fruits) lets us access @fruits in the action
        expect(assigns(:fruits)).to be
        expect(assigns(:fruits).length).to eq 3
        expect(assigns(:fruits).first.class).to eq Fruit
        expect(assigns(:fruits).first.name).to eq 'Fruit number 2'
      end

      it 'should render the index view' do
        expect(response).to render_template('index')
      end
    end

    describe 'as JSON' do
      before do
        get :index, :format => :json
      end

      it 'should respond with a status 200' do
        expect(response).to be_success
        expect(response.status).to eq 200
      end

      it 'should use content type JSON' do
        expect(response.content_type).to eq 'application/json'
      end

      it 'should provide the name of the fruit in the JSON' do
        fruits = JSON.parse(response.body)
        expect(fruits.length).to eq 3
        expect(fruits.first['name']).to eq 'Fruit number 2'
      end
    end
  end
end
