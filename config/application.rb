require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Phones
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true


    config.react.addons = true

    #config.browserify_rails.commandline_options = " -t [ babelify --presets [ react ] --extensions .jsx ] -t [ babelify --presets [ es2015 ] --extensions .es6 ] --fast"
    #config.browserify_rails.commandline_options = "--fast"

    #config.browserify_rails.source_map_environments << "development"

    #config.browserify_rails.use_browserifyinc = false

    # unless Rails.env.production?
    #   # Work around sprockets+teaspoon mismatch:
    #   Rails.application.config.assets.precompile += %w(spec_helper.js)
    #
    #   # Make sure Browserify is triggered when
    #   # asked to serve javascript spec files
    #   config.browserify_rails.paths << lambda { |p|
    #     p.start_with?(Rails.root.join("spec/javascripts").to_s)
    #   }
    # end
    
    # Make public assets requireable in manifest files
    config.assets.paths << Rails.root.join("public", "assets", "stylesheets")
    config.assets.paths << Rails.root.join("public", "assets", "javascripts")

  end
end
