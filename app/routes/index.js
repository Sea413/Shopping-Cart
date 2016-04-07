import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      feedbacks: this.store.findAll('feedback')
    });
  },

  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('index');
    },
    deleteProduct(product) {
      product.destroyRecord();
       this.transitionTo('index');
    },
    adminShow(){
      this.get('shoppingCart').testAdmin();
    }
  }
});
