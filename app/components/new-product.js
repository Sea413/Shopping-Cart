import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    newProductFormShow(){
      this.set('addNewProduct', true);
    },
    save1(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price')
      };
      this.set('addNewProduct', false);
      this.sendAction('save2', params);
    }
  }
});
