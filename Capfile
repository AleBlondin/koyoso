set :deploy_config_path, File.expand_path('devops/deploy/deploy.rb')
set :stage_config_path, File.expand_path('devops/deploy/stages')

# Load DSL and set up stages
require 'capistrano/setup'

# Include default deployment tasks
require 'capistrano/deploy'
require 'capistrano/symfony'
require 'capistrano/yarn'

# Load custom tasks from `devops/deploy/tasks/*.cap` if you have any defined
Dir.glob('devops/deploy/tasks/*.cap').each { |r| import r }
