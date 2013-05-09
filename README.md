Deprecated in favor of [https://github.com/NilsLattek/ember-grunt-template](https://github.com/NilsLattek/ember-grunt-template)




##ember.js + node.js + rake-pipeline

This example shows how to work with ember.js and node.js using rake-pipeline as the build tool.
It also uses the ember.js statemanager for completeness.

It is based on the standard todo list example, but it is split across multiple files and it loads an initial set of todos from the node.js server.
Feel free to use it as a basis template for your applications.

##Usage
The following steps were tested with the following environment:

    MacOS 10.7.2
    Ruby 1.9.3p0
    Ruby Gems 1.8.13
    Node.js 0.6.6
    npm 1.1.0-2

At first we need to install bundler to get all the ruby gems like rake-pipeline.
Use the latest version of bundler (v1.1):

    $ sudo gem install bundler --pre

Check out this git repository:

    $ git clone git@github.com:NilsLattek/ember-node-rakepipeline-boilerplate.git

Remove git history if you want to use this example as a template for your project:

    $ rm -rf .git

Install required gems:

    $ bundle install --binstubs

Install node.js if you haven't already: http://nodejs.org/

Install npm:

    $ curl http://npmjs.org/install.sh | sh

Install node packages for the node.js server:

    $ npm install .

Start the server to concatenate your javascript files, it also starts a proxy server which redirects request starting with '/api' to 'http://localhost:3000/api':

    $ bin/rackup

Open a second terminal and navigate to your project directory and start the node.js server:

    $ node server.js

Or use nodemon for watching your server files and automatically restart the server:

    $ npm install -g nodemon
    $ nodemon server.js

Open your browser and browse to:

    http://localhost:9292


Roadmap:
- Use ember.data for fetching records
- Provide a coffeescript version
- Create basic folder structure for the node.js server
- Send new todos back to the server
- add uglify.js or something similar to the assetfile


Credits go out to:
[dudleyf](https://github.com/dudleyf) for providing tipps about creating an AssetFile
and all the other folks behind these awesome frameworks!
