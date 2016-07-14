var Backbone = require('backbone');

var EggOption = Backbone.Model.extend({

});

var EggOptionCollection = Backbone.Collection.extend({
  model: EggOption,
  url: '/api/egg_options'
});

var Order = Backbone.Model.extend({

});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: '/api/orders'
});

module.exports = {
  'EggOptionCollection': EggOptionCollection,
  'Order': Order,
  'OrderCollection': OrderCollection
};
