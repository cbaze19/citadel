require 'sinatra'
require 'Pony'

get '/' do
	erb :index
end

post '/contact' do
	@name = params[:name]
	@email = params[:email]
	@message = params[:message]
	
	Pony.mail({
		:to => 'caleb@citadelmetalsupply.com',
		:from => 'contact@citadelmetalsupply.com',
		:subject => 'Test',
		:body => 'TEST BODY',
		:via => :smtp,
		:via_options => {
			:address => 'smtp.gmail.com',
			:port => '587',
			:enable_starttls_auto => true,
			:user_name => 'contact@citadelmetalsupply.com',
			:password => 'cms2015!!',
			:authentication => :login,
			:domain => "localhost.localdomain"
		}
	})
	
	erb :index
end
