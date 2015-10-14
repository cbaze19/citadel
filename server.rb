require 'sinatra'
require 'pony'
require 'sinatra/flash'

enable :sessions

get '/' do
	erb :index
end

get '/info' do
	erb :info
end

post '/toctmrs' do
	@name = params[:name]
	@email = params[:email]
	@phone = params[:phone]

	subject = "Potential Customer - #{@name}"
	body = "Name: #{@name}\nEmail: #{@email}\nPhone: #{@phone}"

	email(subject, body)

	redirect 'http://www.ctmrs.com/products.asp'
end

post '/contact' do
	@name = params[:name]
	@email = params[:email]
	@phone = params[:phone]
	@message = params[:message]
	
	subject = "Website Contact - #{@name}"
	body = "#{@message}\n\nName: #{@name}\nEmail: #{@email}\nPhone: #{@phone}"

	email(subject, body)
	
	flash[:confirmation] = "Thank you for your email.  We will get back to you as soon as possible!"

	redirect '/'
end

def email(subject, body)
	Pony.mail({
		:to => 'contact@citadelmetalsupply.com',
		:from => 'contact@citadelmetalsupply.com',
		:subject => subject,
		:body => body,
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
end
