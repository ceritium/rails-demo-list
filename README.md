# README

Demo rails app to explore different approaches to implement a list with pagination, sorts, and filters.

## Details

Replace Turbolinks with TurboDrive.

Based on https://github.com/hotwired/turbo-rails

```
Add the turbo-rails gem to your Gemfile: gem 'turbo-rails'
Run ./bin/bundle install
Run ./bin/rails turbo:install
```
- Remove data-remote from form
- Remove `turbolinks:load` event listener

Features:
- Links handled by turbolinks
- GET forms handled by turbolinks
