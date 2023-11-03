import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import { Contacts } from '../../api/contact/Contacts';
import LoadingSpinner from '../components/LoadingSpinner';
import Contact from '../components/Contact';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */

const ListContacts = () => {

  const { contacts, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Contacts.userPublicationName);
    const rdy = subscription.ready();
    const items = Contacts.collection.find({}).fetch();
    return {
      contacts: items,
      ready: rdy,
    };
  }, []);
  // contacts variable
  const contactUser = _.filter(contacts, function (contact) { if (contact.owner === Meteor.user().username) { return contact; } });
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center text-light">
            <h2>List Contacts</h2>
          </Col>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {contactUser.map((contact) => <Contact contact={contact} />)}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListContacts;
