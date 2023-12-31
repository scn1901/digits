import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Contact = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <img src={contact.image} width={75} alt="img" />
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <footer className="blockquote-footer">{contact.owner}</footer>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
