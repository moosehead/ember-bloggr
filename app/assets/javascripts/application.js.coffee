#= require modernizr
#= require jquery
#= require foundation
#= require handlebars
#= require ember
#= require ember-data
#= require moment
#= require showdown
#= require_self
#= require store
#= require routes
#= require_tree ./controllers
#= require_tree ./models
#= require_tree ./templates
#= require_tree ./helpers


window.App = Ember.Application.create()
($ document).foundation()
