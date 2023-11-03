import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addContact = (data) => {
  console.log(`  Adding: ${data.firstName} (${data.lastName})`);
  Contacts.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addContact(data));
  }
}
