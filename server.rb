require 'sinatra'
require 'pony'
require 'sinatra/flash'

enable :sessions

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
	
	flash[:confirmation] = "Thank you for your email.  We will get back to you as soon as possible!"

	redirect '/'
end
