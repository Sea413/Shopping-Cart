import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  adminShowing: false,

  totalPrice: Ember.computed('items.length', function() {
    var totalPrice = 0;
    for (let product of this.get('items')){
      totalPrice += product.get('price');
    }
    return totalPrice;

  }),
//   adminTrue: Ember.observer('isAdminShow.length', function(){
//     var i=0;
//     var adminShowing =this.get('adminTrue') ;
//     if(i < 1){
//       (i += 2);
//       console.log(i);
//     adminShowing = true;
//   return adminShowing;
// } else if (i >1) {
//   console.log(i);
//   adminShowing = false;
//   (i -= 2);
//   return adminShowing;
//   }
//   }),

  add(item) {
    this.get('items').pushObject(item);
  },
  testAdmin(){
      var adminShowing = this.get('adminShowing');
      if(adminShowing === true){
        this.set('adminShowing', false);
      } else if (adminShowing !== true) {
        this.set('adminShowing', true);
      }
    console.log(this.get('isAdminShow'));
  }

});
