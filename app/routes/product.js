import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions:{
  saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var product = params.product;
      product.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', params.product);
    },
  }
});
