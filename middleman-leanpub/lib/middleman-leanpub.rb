require 'middleman-core'
require 'pry'
class LeanpubExtension < ::Middleman::Extension
  def initialize(app, options_hash={}, &block)
    # Call super to build options from the options_hash
    super
    
    app.before do
      require "json"
      require "net/http"
      require "uri"

      begin
        uri = URI.parse("https://leanpub.com/build-apis-you-wont-hate.json?api_key=#{ENV['LEANPUB_API_KEY']}")

        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true

        request = Net::HTTP::Get.new(uri.request_uri)
        response = http.request(request)
        result = JSON.parse(response.body)

        raise "ERROR!!!" unless response.code == "200"
      rescue
        puts "Shit did not go well with LeanPub"
      else
        filepath = File.join(app.root_path, app.config.data_dir, 'leanpub.yml')
        file = File.open(filepath, 'w') do |f|
          f.write("reader_count: #{result['total_copies_sold'].to_i}")
        end
      end
    end
  end
end

# Register extensions which can be activated
# Make sure we have the version of Middleman we expect
# Name param may be omited, it will default to underscored
# version of class name

::Middleman::Extensions.register(:leanpub, LeanpubExtension)
