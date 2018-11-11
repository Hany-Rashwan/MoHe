import { Session } from 'meteor/session';

Template.topNavigationBar.events({
  'submit'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element

   var target = event.target;
   var pos = target.poscode.value;
   Session.set('POS', pos);
  // alert(pos);
 }
 //  const pos= event.currentTarget.text.value;
  
  //var grocerData = null;
 /*Meteor.call('Grocerfind', function(error, result){
   if(error)
   {
      alert(error.reason);

   }
   else
   {
  // Session.set("data", result)
   	  alert("hi");
   	 // grocerData= result;
    //  return result;
   }*/

});
