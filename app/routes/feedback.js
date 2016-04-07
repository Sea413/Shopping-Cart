import Ember from 'ember';

export default Ember.Route.extend({
 model(params) {
   return this.store.findRecord('feedback', params.feedback_id);
 },
 saveFeedback() {
 var params = {
   username: this.get('content'),
   content: this.get('content'),
   product: this.get('product')
   };
   this.set('addNewFeedback', false);
   this.sendAction('saveFeedback', params);
 },
 destroyAnswer(feedback) {
   feedback.destroyRecord();
   this.transitionTo('index');
}
});
