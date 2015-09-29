require 'sinatra'
require 'pony'
require 'sinatra/flash'

get '/' do
	erb :index
end

post '/contact' do
	@name = params[:name]
	@email = params[:email]
	@message = params[:message]
	
	Pony.mail({
		:to => 'contact@citadelmetalsupply.com',
		:from => 'contact@citadelmetalsupply.com',
		:subject => "Website Contact - #{@name}",
		:body => "#{@message} \n\n #{@email}",
		:via => :smtp,
		:via_options => {
			:address => 'smtp.gmail.com',
			:port => '587',
			:enable_starttls_auto => true,
			:user_name => 'contact@citadelmetalsupply.com',
			:password => 'cms2015!!',
			:authentication => :plain,
			:domain => "localhost.localdomain"
		}
	})

	redirect '/'
end
