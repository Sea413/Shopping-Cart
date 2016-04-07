import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item)
    },
    delete(product){
      this.sendAction('deleteProduct', product);
    },
    adminShow(){
      this.get('shoppingCart').adminShow();
    },
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('index');
    },
  }
});
