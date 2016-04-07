import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  addNewFeedback: false,
  actions: {
    feedbackFormShow() {
      this.set('addNewFeedback', true);
    },

    saveFeedback() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        product: this.get('product')
      };
      this.set('addNewFeedback', false);
      this.sendAction('saveFeedback', params);
    }
  }
});
