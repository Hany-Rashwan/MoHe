import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
//import { Tracker } from 'meteor/tracker';
 Mohedb = new Meteor.Collection('Mohedb');
 //export const Mohedb = new Mongo.Collection('mohedb');

/*SimpleSchema.setDefaultMessages({
 messages:{
source_destination_same: "[label] cannot be same as Starting point",
destination_source_same: "[label] cannot be same as Destination point",
endDateTime_lessthan_startDateTime: "[label] cannot be past to start date and time",
startDateTime_lessthan_endDateTime: "[label] cannot be past to start date and time"
}
});*/


Mohedb.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  }
});


//Schema for Grocer data (Mohedb collection
MoHeSchema = new SimpleSchema({

Edara:
 {
 type: String,
 label: "Edara",
 max: 200
 },

postOffice:
 {
 type: String,
 label: "Post Office",
 max: 200
 
 },

grocerName:
 {
 type: String,
 label: "Grocer Name",
 max: 500
},
grocerMobilPhone:
 {
 type: String,
 label: "Grocer Mobile Number",
 max: 12
},
grocerNationalNo:
 {
 type: String,
 label: " Grocer National Number",
 max: 14
 },

grocerCardNo:
 {
 type: String,
 label: "Grocer Card Number",
 max: 12
 },

grocerState:   // working 0 , suspended 1 , canceled 2, renounced 3
 {
 type: String,
// label: "Grocer State",
  autoform: {
  type: "select-radio-inline",
  options:function()
  {
    return[ {label: "On", value: '1'},
                 {label: "Off", value: '0'},
                 {label: "متنازل", value: '2'},
                 {label: "ملغي", value: '3'}]
  }
}
 },

posCode:
 {
 type: String,
 label: "Pos Code",
 max: 6
 },

oldPosSerial:
 {
 type: String,
 label: "Old POS Serial Number",
 max: 8
 },

 oldPosState:  // serve 1 , out of service 0
 {
 type: String,
  autoform: {
  type: "select-radio-inline",
  options:function()
  {
    return[ {label: "On", value: '1'},
                 {label: "Off", value: '0'},
                 {label: "مكهن", value: '2'}]
  }
}
 },

 newPosSerial:
 {
 type: String,
 label: "New POS Serial Number",
 max: 8
 },

 newPosState:  // serve 1 , out of service 0
 {
 type: String,
 autoform: {
  type: "select-radio-inline",
  options:function()
  {
    return[ {label: "On", value: '1'},
                 {label: "Off", value: '0'},
                 {label: "مكهن", value: '2'}]
  }
}
 },

pinpadSerial: 
 {
 type: String,
 label: "Pin-Pad Serial Number",
 max: 8,
 },
 
simSerial: 
 {
 type: String,
 label: "Data-Sime Serial Number",
 max: 19,
 },
 simType: 
 {
 type: String,
 autoform: {
  type: "select-radio-inline",
  options:function()
  {
    return[{label: "Voda", value: '0'},
                 {label: "Orange", value: '1'},
                 {label: "itsalat", value: '2'},
                 {label: "WE", value: '3'}]
  }
}
 },

psamSerial:
 {
 type: String,
 label: "P-Sam Serial Number",
 max: 15,
 }

});


Mohedb.attachSchema(MoHeSchema);

/*Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
}, { tracker: Tracker }));*/

