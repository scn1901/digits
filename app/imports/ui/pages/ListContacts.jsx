import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Contacts } from '../../api/contact/Contacts';
import { Notes } from '../../api/note/Notes';
import Contact from '../components/Contact';
import LoadingSpinner from '../components/LoadingSpinner';

const ListContacts = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, contacts, notes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to contacts and notes documents
    const sub1 = Meteor.subscribe(Contacts.userPublicationName);
    const sub2 = Meteor.subscribe(Notes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = sub1.ready() && sub2.ready();
    // Get the Stuff documents
    const contactItems = Contacts.collection.find({}).fetch();
    const noteItems = Notes.collection.find({}).fetch();
    return {
      contacts: contactItems,
      notes: noteItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Contact</h2>
          </Col>
        </Col>
      </Row>
      <Row>
        {contacts.map((contact) => <Col key={contact._id}><Contact contact={contact} notes={notes.filter(note => (note.contactId === contact._id))} /></Col>)}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListContacts;
