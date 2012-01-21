# credits to http://stackoverflow.com/a/8868354/296042

require 'rake-pipeline'
require 'rake-pipeline/middleware'
require "rack/streaming_proxy" # Don't forget to install the rack-streaming-proxy gem.

use Rack::StreamingProxy do |request|
  # Insert your own logic here
  if request.path.start_with?("/api")
    "http://localhost:3000#{request.path}"
  end
end

use Rake::Pipeline::Middleware, 'Assetfile' # This is the path to your Assetfile
run Rack::Directory.new('public') # This should match whatever your Assetfile's output directory is