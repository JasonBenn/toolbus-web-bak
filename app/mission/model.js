import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  foundIn: DS.attr('string'),
  documentationUrl: DS.attr('string'),
  versionAdded: DS.attr('string'),
  versionRemoved: DS.attr('string'),
  version: DS.attr('number'),
  // users: DS.hasMany('user'),
  tool: DS.belongsTo('tool'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
