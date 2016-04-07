import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    newProductFormShow(){
      this.set('addNewProduct', true);
    },
    saveProduct(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        feedbacks: this.get('feedback')
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    },
    adminShow(){
      this.set('isAdminShow', true);
    }
  }
});
