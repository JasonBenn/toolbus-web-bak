import DS from 'ember-data';

export default DS.Model.extend({
  "name": DS.attr('String'),
  "primary_color": DS.attr('String'),
  "secondary_color": DS.attr('String'),
  "description": DS.attr('String'),
  "url": DS.attr('String')
});
