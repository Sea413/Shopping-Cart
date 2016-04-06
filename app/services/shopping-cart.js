import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  totalPrice: Ember.computed('items.length', function() {
    var totalPrice = 0;
    for (let product of this.get('items')){
      totalPrice += product.get('price');
    }
    return totalPrice;

  }),

  add(item) {
    this.get('items').pushObject(item);
  },

});
