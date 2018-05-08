# config valid only for current version of Capistrano
lock '3.4.0'

set :deploy_to, "/var/www/koyoso"
#set :repo_url, 'git@github.com:fansible/tywin.git'
set :repo_url, 'https://github.com/AleBlondin/koyoso'

set :stages, %w(prod)

set :symfony_directory_structure, 3

set :linked_dirs, ['var/logs']
set :linked_files, fetch(:linked_files, []).push('app/config/parameters.yml')

set :ssh_user, 'www-data'
set :ssh_options, {
  forward_agent: true,
}

set :branch, 'master'
set :keep_releases, 3

set :composer_install_flags, '--prefer-dist --no-interaction --optimize-autoloader'

set :yarn_target_path, -> { release_path.join('client') }
set :yarn_flags, '--production --silent --no-progress'    # default
set :yarn_roles, :all                                     # default
set :yarn_env_variables, {}                               # default
