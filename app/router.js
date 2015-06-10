import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tools', function() {
    this.route('show', { path: '/:tool_id' })
  });
});

export default Router;
