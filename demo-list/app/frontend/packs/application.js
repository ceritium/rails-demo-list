// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '../js/bootstrap_js_files.js'  

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"

// https://thelucid.com/2019/02/20/handling-get-remote-forms-with-turbolinks-in-rails-6/
document.addEventListener('turbolinks:load', function(event) {
  for (let form of document.querySelectorAll('form[method=get][data-remote=true]')) {
    form.addEventListener('ajax:beforeSend', function (event) {
      const detail = event.detail,
            xhr = detail[0], options = detail[1];

      Turbolinks.visit(options.url);
      event.preventDefault();
    });
  }
});
