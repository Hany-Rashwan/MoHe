import { Session } from 'meteor/session';
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
Meteor.subscribe('Mohedb');

});
Template.Home.onDestroyed(function () {
});
//import { Template } from 'meteor/templating';
//import {mohedb} from '/lib/collections/MoHeDB.js';


Template.updateGrocerwithPos.helpers({
  GrocerPosNo() {
     return Mohedb.findOne({posCode:Session.get('POS')});
   //return w8W8gje7GouMyvGPz;

  }
});

