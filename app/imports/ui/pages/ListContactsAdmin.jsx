import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Contacts } from '../../api/contact/Contacts';
import LoadingSpinner from '../components/LoadingSpinner';
import ContactAdmin from '../components/ContactAdmin';

const ListContactsAdmin = () => {
  // useTracker implement
  const { contacts, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Contacts.adminPublicationName);
    const rdy = subscription.ready();
    const items = Contacts.collection.find().fetch();
    return {
      contacts: items,
      ready: rdy,
    };
  }, []);
  // contacts variable
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center text-light">
            <h2>List Contacts (Admin)</h2>
          </Col>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {contacts.map((contact) => <ContactAdmin contact={contact} />)}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListContactsAdmin;
